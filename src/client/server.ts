/** Calls a server function through google.script.run and resolves with its return value. */
export function callServer<T>(name: string, ...args: google.script.Parameter[]): Promise<T> {
  return new Promise((resolve, reject) => {
    const runner = google.script.run
      .withSuccessHandler((value: T) => resolve(value))
      .withFailureHandler((error: Error) => reject(error));
    const fn = runner[name];
    if (typeof fn !== 'function') {
      reject(new Error(`Unknown server function: ${name}`));
      return;
    }
    fn.apply(runner, args);
  });
}
