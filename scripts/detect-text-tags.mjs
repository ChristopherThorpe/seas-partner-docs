// Checks the Dropbox Sign text tags in a PDF with POST /v3/document/detect_fields.
// Detection never creates a signature request or sends anything.
//
//   DROPBOX_SIGN_API_KEY=… node scripts/detect-text-tags.mjs file.pdf [--json]
//
// Prints the detected fields (signers numbered from 1, as in the tags) and any warnings or
// errors. Exits 1 if Dropbox Sign reported a warning or error, so it can gate a test run.
// Behind an HTTPS proxy, run with NODE_USE_ENV_PROXY=1 (Node >= 22.21); Node's fetch
// ignores HTTPS_PROXY otherwise.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const json = args.includes('--json');
const file = args.find((a) => !a.startsWith('--'));
const key = process.env.DROPBOX_SIGN_API_KEY;
if (!file || !key) {
  console.error(
    'Usage: DROPBOX_SIGN_API_KEY=… node scripts/detect-text-tags.mjs file.pdf [--json]',
  );
  process.exit(2);
}

const form = new FormData();
form.append(
  'file',
  new Blob([await readFile(file)], { type: 'application/pdf' }),
  path.basename(file),
);
form.append('detection_mode', 'text_tags');
// Without a paid API plan, every call, even detection, needs test mode (HTTP 402 otherwise).
form.append('test_mode', '1');

const res = await fetch('https://api.hellosign.com/v3/document/detect_fields', {
  method: 'POST',
  headers: { Authorization: `Basic ${Buffer.from(`${key}:`).toString('base64')}` },
  body: form,
});
const body = await res.json();
if (!res.ok) {
  console.error(`HTTP ${res.status}: ${JSON.stringify(body.error ?? body)}`);
  process.exit(1);
}
if (json) console.log(JSON.stringify(body, null, 2));

const result = body.detection_result;
const fields = result.form_fields_per_document ?? [];
const problems = [...(result.warnings ?? []), ...(result.errors ?? [])];
if (!json) {
  console.table(
    fields.map((f) => ({
      type: f.type,
      signer: Number(f.signer) + 1,
      id: f.api_id,
      label: f.name,
      required: f.required,
      page: f.page,
      x: f.x,
      y: f.y,
      width: f.width,
      height: f.height,
    })),
  );
  for (const p of problems)
    console.error(`${p.warning_name ?? p.error_name}: ${p.warning_msg ?? p.error_msg}`);
}
process.exit(problems.length ? 1 : 0);
