import { Cluster, Context, User } from "@kubernetes/client-node";
import { ipcRenderer } from "electron";

export const connect = (options?: {
  clusters: Cluster[];
  contexts: Context[];
  currentContext: Context["name"];
  users: User[];
}) => ipcRenderer.invoke("connect", options);
