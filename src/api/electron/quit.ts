import { ipcRenderer } from "electron";

export const quit = () => ipcRenderer.invoke("quit");
