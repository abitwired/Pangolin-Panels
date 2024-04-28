import { V1Namespace, CoreV1Api, KubeConfig } from "@kubernetes/client-node";

module.exports = {
  getNamespaces: global.share.ipcMain.handle("getNamespaces", async () => {
    try {
      const kc = new KubeConfig();
      kc.loadFromDefault();
      const client = await kc.makeApiClient(CoreV1Api);
      const response = await client.listNamespace();
      const namespaces: V1Namespace[] = response.body.items;
      if (response === null) {
        throw new Error("Failed to fetch namespaces");
      }

      return namespaces;
    } catch (err) {
      console.error(err);
      return null;
    }
  }),
};
