import { ipcMain, ContextBridge } from "electron";
import { KubeInstance } from "./types/kubeInstance";

export {};
declare global {
  var share: {
    ipcMain: typeof ipcMain;
    client?: KubeInstance;
  };
  interface Window {
    electron: ContextBridge;
  }
}
