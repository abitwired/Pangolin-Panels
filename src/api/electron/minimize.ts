import { ipcRenderer } from "electron";

export const minimize = () => ipcRenderer.invoke("minimize");
