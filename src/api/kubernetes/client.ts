import { ipcRenderer } from "electron";
import { KubeInstance } from "../../types/kubeInstance";

export const client = (): Promise<KubeInstance> => ipcRenderer.invoke("client");
