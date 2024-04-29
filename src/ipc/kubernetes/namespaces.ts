import { V1Namespace, CoreV1Api, KubeConfig } from "@kubernetes/client-node";

module.exports = {
  getNamespaces: global.share.ipcMain.handle("getNamespaces", async () => {
    try {
      const { client } = global.share;
      const response = await client.listNamespaces();
      if (response === null) {
        throw new Error("Failed to fetch namespaces");
      }

      const namespaces: V1Namespace[] = response;
      return namespaces;
    } catch (err) {
      console.error(err);
      return null;
    }
  }),
};
