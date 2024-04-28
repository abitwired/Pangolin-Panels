import { ipcMain, ContextBridge } from "electron";

export {};
declare global {
  var share: {
    ipcMain: typeof ipcMain;
  };
  interface Window {
    electron: ContextBridge;
  }
}
