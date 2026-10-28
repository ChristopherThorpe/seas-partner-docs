// Builds the Apps Script project into dist/, which clasp pushes as-is.
//
//   dist/Code.js          server bundle (src/server/main.ts)
//   dist/index.html       client page with its bundle inlined (src/client)
//   dist/appsscript.json  manifest
//
// Apps Script only calls top-level function declarations, both for web-app entry points
// (doGet) and for google.script.run. The server is therefore bundled into a single IIFE,
// and each export of src/server/main.ts gets a top-level stub that forwards to it.
import * as esbuild from 'esbuild';
import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SERVER_ENTRY = path.join(root, 'src/server/main.ts');
const CLIENT_ENTRY = path.join(root, 'src/client/main.ts');
const CLIENT_HTML = path.join(root, 'src/client/index.html');
const MANIFEST = path.join(root, 'src/appsscript.json');
const GLOBAL = '__app';
const TARGET = 'es2020';

/** Names exported by the server entry, read from an ESM build's metafile. */
async function serverExports() {
  const result = await esbuild.build({
    entryPoints: [SERVER_ENTRY],
    bundle: true,
    format: 'esm',
    target: TARGET,
    outfile: 'exports-probe.js',
    write: false,
    metafile: true,
    logLevel: 'silent',
  });
  const [output] = Object.values(result.metafile.outputs);
  return output.exports;
}

async function buildServer(outdir) {
  const names = await serverExports();
  const result = await esbuild.build({
    entryPoints: [SERVER_ENTRY],
    bundle: true,
    format: 'iife',
    globalName: GLOBAL,
    target: TARGET,
    write: false,
    legalComments: 'none',
  });
  const stubs = names
    .map((name) => `function ${name}() {\n  return ${GLOBAL}.${name}.apply(this, arguments);\n}`)
    .join('\n');
  await writeFile(path.join(outdir, 'Code.js'), `${result.outputFiles[0].text}\n${stubs}\n`);
  return names;
}

async function buildClient(outdir) {
  const result = await esbuild.build({
    entryPoints: [CLIENT_ENTRY],
    bundle: true,
    format: 'iife',
    target: TARGET,
    minify: true,
    write: false,
    legalComments: 'none',
  });
  // Keep the inlined script from closing its own <script> element.
  const js = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
  const html = await readFile(CLIENT_HTML, 'utf8');
  if (!html.includes('<!-- @inline-script -->')) {
    throw new Error(`${CLIENT_HTML} is missing the <!-- @inline-script --> marker`);
  }
  await writeFile(
    path.join(outdir, 'index.html'),
    html.replace('<!-- @inline-script -->', () => `<script>\n${js}</script>`),
  );
}

/** Builds into `outdir` (default dist/) and returns the server function names exposed. */
export async function build(outdir = path.join(root, 'dist')) {
  await rm(outdir, { recursive: true, force: true });
  await mkdir(outdir, { recursive: true });
  const [names] = await Promise.all([
    buildServer(outdir),
    buildClient(outdir),
    copyFile(MANIFEST, path.join(outdir, 'appsscript.json')),
  ]);
  return names;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const names = await build();
  console.log(`Built dist/ (server functions: ${names.join(', ')})`);
}
