import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { build } from '../scripts/build.mjs';

// Runs the real build and loads dist/Code.js the way Apps Script does: as a classic script
// whose top-level function declarations become globals.
describe('build', () => {
  let outdir: string;
  let names: string[];

  beforeAll(async () => {
    outdir = await mkdtemp(path.join(os.tmpdir(), 'seas-build-'));
    names = await build(outdir);
  });

  afterAll(async () => {
    await rm(outdir, { recursive: true, force: true });
  });

  it('exposes every server export as a top-level function', async () => {
    expect(names).toEqual(expect.arrayContaining(['doGet', 'whoAmI']));

    const sandbox: Record<string, unknown> = {
      Session: {
        getActiveUser: () => ({ getEmail: () => ' Partner@Example.com ' }),
        getEffectiveUser: () => ({ getEmail: () => 'cat@seas.harvard.edu' }),
      },
    };
    vm.runInNewContext(await readFile(path.join(outdir, 'Code.js'), 'utf8'), sandbox);

    for (const name of names) expect(typeof sandbox[name]).toBe('function');
    expect((sandbox.whoAmI as () => unknown)()).toEqual({
      activeUser: 'partner@example.com',
      effectiveUser: 'cat@seas.harvard.edu',
    });
  });

  it('inlines the client bundle into index.html', async () => {
    const html = await readFile(path.join(outdir, 'index.html'), 'utf8');
    expect(html).not.toContain('@inline-script');
    expect(html).toMatch(/<script>[\s\S]*whoAmI[\s\S]*<\/script>/);
  });

  it('copies the manifest', async () => {
    const manifest = JSON.parse(await readFile(path.join(outdir, 'appsscript.json'), 'utf8'));
    expect(manifest.runtimeVersion).toBe('V8');
  });
});
