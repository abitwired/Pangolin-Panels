import { ipcMain } from "electron";

export {};
declare global {
  var share: {
    ipcMain: ipcMain;
  };
  interface Window {
    electron: any;
  }
}
