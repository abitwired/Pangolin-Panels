import { ipcRenderer } from "electron";

export const getPods = () => ipcRenderer.invoke("getPods");
