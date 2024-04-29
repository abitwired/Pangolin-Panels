import { Cluster, Context, User } from "@kubernetes/client-node";
import { KubeInstance } from "../../types/kubeInstance";

module.exports = {
  connect: global.share.ipcMain.handle(
    "connect",
    async (
      event,
      options?: {
        clusters: Cluster[];
        contexts: Context[];
        currentContext: Context["name"];
        users: User[];
      }
    ) => {
      try {
        // Stores the client in the global share object for later use
        const client = new KubeInstance();

        const retries = 3;
        let attempts = 0;
        for (attempts; attempts < retries; attempts++) {
          try {
            await client.connect(options);
            break;
          } catch (err) {
            console.error(err.message);
          }

          await new Promise((resolve) => setTimeout(resolve, 1_000));
        }

        if (attempts >= 2) {
          throw new Error(
            "Failed to connect to Kubernetes Cluster: Retries exceeded"
          );
        } else {
          global.share.client = client;
        }

        return {
          status: "connected",
        };
      } catch (err) {
        console.error(err.message);
        global.share.client = null;
        return {
          status: "disconnected",
          message: err.message,
        };
      }
    }
  ),
};
