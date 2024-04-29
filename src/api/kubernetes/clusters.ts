import { ipcRenderer } from "electron";
import { PangolinCluster } from "../../types/types";

export const clusters = (): Promise<PangolinCluster[]> =>
  ipcRenderer.invoke("clusters");
