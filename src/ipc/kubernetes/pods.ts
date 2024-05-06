import { V1Pod } from "@kubernetes/client-node";

module.exports = {
  getPods: global.share.ipcMain.handle("getPods", async () => {
    try {
      const { client } = global.share;
      const response = await client.listPods();
      if (response === null) {
        throw new Error("Failed to fetch pods");
      }

      const pods: V1Pod[] = response;
      return pods;
    } catch (err) {
      console.error(err);
      return null;
    }
  }),
};
