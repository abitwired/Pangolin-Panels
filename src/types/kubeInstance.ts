import {
  Cluster,
  Context,
  User,
  CoreV1Api,
  KubeConfig,
} from "@kubernetes/client-node";

/**
 * KubeInstance class to interact with a Kubernetes Cluster.
 */
export class KubeInstance {
  client: CoreV1Api;

  /**
   * Creates a client for a Kubernetes Cluster.\
   * @param options - Options to load the KubeConfig
   * @returns a K8s client or throws an error
   */
  public async connect(options?: {
    clusters: Cluster[];
    contexts: Context[];
    currentContext: Context["name"];
    users: User[];
  }) {
    const kc = new KubeConfig();
    if (options) {
      kc.loadFromOptions(options);
    } else {
      kc.loadFromDefault();
    }

    const client = await kc.makeApiClient(CoreV1Api);

    if (client === null || client === undefined) {
      throw new Error("Failed to create client for Kubernetes Cluster");
    }

    try {
      // Test connection by listing nodes
      await client.listNode();
    } catch (err) {
      throw new Error(
        "Failed to connect to Kubernetes Cluster: " + err.message
      );
    }

    return client;
  }

  public async listNamespaces() {
    const response = await this.client.listNamespace();
    return response.body.items;
  }

  public async listNodes() {
    const response = await this.client.listNode();
    return response.body.items;
  }

  public async listPods() {
    const response = await this.client.listPodForAllNamespaces();
    return response.body.items;
  }

  public async listServices() {
    const response = await this.client.listServiceForAllNamespaces();
    return response.body.items;
  }
}
