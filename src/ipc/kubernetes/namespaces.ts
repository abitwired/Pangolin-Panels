import { V1Namespace } from "@kubernetes/client-node";

// Desc: IPC handler for fetching namespaces from k8s cluster
const k8s = require("@kubernetes/client-node");
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

module.exports = {
  getNamespaces: global.share.ipcMain.handle("getNamespaces", async () => {
    try {
      const response = await k8sApi.listNamespace();
      const namespaces: V1Namespace[] = response.body.items;
      return namespaces;
    } catch (err) {
      console.error(err);
      return null;
    }
  }),
};
