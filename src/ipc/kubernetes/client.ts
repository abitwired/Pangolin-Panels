import { KubeInstance } from "../../types/kubeInstance";

module.exports = {
  client: global.share.ipcMain.handle(
    "client",
    (): KubeInstance => global.share.client
  ),
};
