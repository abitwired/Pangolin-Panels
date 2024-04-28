import { CoreV1Api } from "@kubernetes/client-node";
import { ipcMain, ContextBridge } from "electron";

export {};
declare global {
  var share: {
    ipcMain: typeof ipcMain;
    client?: CoreV1Api;
  };
  interface Window {
    electron: ContextBridge;
  }
}
