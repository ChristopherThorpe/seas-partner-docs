// Every export here becomes a top-level Apps Script function (see scripts/build.mjs),
// callable as a web-app entry point or through google.script.run.
import type { WhoAmI } from '../core/api';
import { normalizeEmail } from '../core/email';

export function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('SEAS Partner Docs')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

export function whoAmI(): WhoAmI {
  return {
    activeUser: normalizeEmail(Session.getActiveUser().getEmail()),
    effectiveUser: normalizeEmail(Session.getEffectiveUser().getEmail()),
  };
}
