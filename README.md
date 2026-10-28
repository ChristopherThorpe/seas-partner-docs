# SEAS Partner Docs

A Google Apps Script web app that turns questionnaire answers into Google Docs. Administrators write questionnaires and document templates in Markdown, creators answer a questionnaire, and the app generates one or more Google Docs whose PDFs carry hidden Dropbox Sign text tags for signing.

The work plan, roles, and decisions are in [issue #1](https://github.com/ChristopherThorpe/seas-partner-docs/issues/1). Agreement drafts that will become templates live in [`agreements/`](agreements/).

## Layout

| Path                  | What                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/core/`           | Pure TypeScript: no Apps Script, DOM, or Node globals (its `tsconfig.json` enforces this). Unit-tested. |
| `src/server/`         | Apps Script adapters. Every export of `main.ts` becomes a top-level Apps Script function.               |
| `src/client/`         | Browser code for the HtmlService page. `index.html` gets the bundled script inlined.                    |
| `src/appsscript.json` | Apps Script manifest: V8 runtime, time zone, OAuth scopes, web-app settings.                            |
| `test/`               | Vitest specs.                                                                                           |
| `scripts/build.mjs`   | esbuild build into `dist/`, which is what clasp pushes.                                                 |

## Development

Requires Node 22 or newer.

```bash
npm ci
```

```bash
npm run check
```

`npm run check` runs lint (ESLint and Prettier), type checks, tests, and the build. CI runs the same steps on every pull request. Individual scripts: `npm test`, `npm run typecheck`, `npm run lint`, `npm run format`, `npm run build`.

## Deploying to Apps Script

One-time setup:

1. Turn on the Apps Script API for your Google account at <https://script.google.com/home/usersettings>.
2. Log in with clasp:

   ```bash
   npx clasp login
   ```

3. Create the Apps Script project. This writes `.clasp.json`, which is git-ignored:

   ```bash
   npx clasp create-script --type standalone --title "SEAS Partner Docs" --rootDir dist
   ```

   To use an existing project instead, copy `.clasp.json.example` to `.clasp.json` and fill in its script ID.

Then, for each change:

```bash
npm run push
```

```bash
npm run deploy
```

`npm run push` builds `dist/` and uploads it. `npm run deploy` also creates a new web-app deployment. The first time you open the deployment, Google asks you to authorize the scopes in `src/appsscript.json`.

The manifest deploys the web app as **Execute as: me** with **Who has access: anyone with a Google account**. The current page only reports who Apps Script thinks the visitor is; it's the test harness for the identity spike in [#3](https://github.com/ChristopherThorpe/seas-partner-docs/issues/3).

## Secrets

Never commit API keys. The Dropbox Sign key lives in the cloud development environment as `DROPBOX_SIGN_API_KEY`. In the deployed app, keys will go in the project's Script Properties.
