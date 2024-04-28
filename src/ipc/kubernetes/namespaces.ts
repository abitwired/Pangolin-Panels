import { V1Namespace, CoreV1Api } from "@kubernetes/client-node";

module.exports = {
  getNamespaces: global.share.ipcMain.handle(
    "getNamespaces",
    async (event, k8sApi: CoreV1Api) => {
      try {
        const response = await k8sApi.listNamespace();
        const namespaces: V1Namespace[] = response.body.items;
        if (response === null) {
          throw new Error("Failed to fetch namespaces");
        }

        return namespaces;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
  ),
};
