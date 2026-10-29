/** Shapes returned by server functions that the client calls through google.script.run. */

export interface WhoAmI {
  /**
   * The signed-in user as Apps Script reports it. Blank for users outside the deploying
   * account's Workspace domain when the app executes as the deployer (see #3).
   */
  activeUser: string;
  /** The account the script executes as. */
  effectiveUser: string;
}
