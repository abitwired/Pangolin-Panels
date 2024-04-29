import { KubeConfig } from "@kubernetes/client-node";
import { PangolinCluster } from "../../types/types";

module.exports = {
  clusters: global.share.ipcMain.handle("clusters", (): PangolinCluster[] => {
    try {
      const kc = new KubeConfig();
      kc.loadFromDefault();
      const clusters = kc.clusters;
      const contexts = kc.getContexts();
      const pangolinClusters: PangolinCluster[] = [];

      // Map the clusters, users, and contexts to a single object
      contexts.forEach((context) => {
        const cluster = clusters.find((c) => c.name === context.cluster);
        const user = kc.users.find((u) => u.name === context.user);
        pangolinClusters.push({
          cluster: cluster,
          user: user,
          currentContext: kc.currentContext,
          context: context,
        });
      });

      return pangolinClusters;
    } catch (err) {
      console.error(err.message);
      return [];
    }
  }),
};
