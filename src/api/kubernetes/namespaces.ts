import { CoreV1Api } from "@kubernetes/client-node";
import { ipcRenderer } from "electron";

export const getNamespaces = () => ipcRenderer.invoke("getNamespaces");
