import { Cluster, Context, User } from "@kubernetes/client-node";

export type PangolinCluster = {
  cluster: Cluster;
  user: User;
  currentContext: Context["name"];
  context: Context;
};
