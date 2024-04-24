import { ipcRenderer } from "electron";

export const getNamespaces = () => ipcRenderer.invoke("getNamespaces");
