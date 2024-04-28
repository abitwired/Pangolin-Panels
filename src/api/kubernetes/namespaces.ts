import { CoreApi } from "@kubernetes/client-node";
import { ipcRenderer } from "electron";

export const getNamespaces = (k8sApi: CoreApi) =>
  ipcRenderer.invoke("getNamespaces", k8sApi);
