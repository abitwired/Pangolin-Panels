import { KubeConfig, CoreV1Api } from "@kubernetes/client-node";

module.exports = {
  connect: global.share.ipcMain.handle("connect", async () => {
    try {
      const kc = new KubeConfig();
      kc.loadFromDefault();
      const client = await kc.makeApiClient(CoreV1Api);
      global.share.client = client;
      return {
        status: "connected",
      };
    } catch (err) {
      console.error(err);
      return {
        status: "disconnected",
        message: err.message,
      };
    }
  }),
};
