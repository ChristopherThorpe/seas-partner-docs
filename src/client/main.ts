import type { WhoAmI } from '../core/api';
import { callServer } from './server';

function show(text: string): void {
  const el = document.getElementById('who');
  if (el) el.textContent = text;
}

callServer<WhoAmI>('whoAmI').then(
  (who) =>
    show(
      `Signed in as: ${who.activeUser || '(not reported by Apps Script)'}\n` +
        `Running as: ${who.effectiveUser}`,
    ),
  (error: Error) => show(`Error: ${error.message}`),
);
