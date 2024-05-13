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

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    popover?: string;
    popovertarget?: string;
  }
}
