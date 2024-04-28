import { ipcRenderer } from "electron";

export const connect = () => ipcRenderer.invoke("connect");
