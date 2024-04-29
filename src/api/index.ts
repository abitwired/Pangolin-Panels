import { quit } from "./electron/quit";
import { minimize } from "./electron/minimize";
import { getNamespaces } from "./kubernetes/namespaces";
import { connect } from "./kubernetes/connect";
import { clusters } from "./kubernetes/clusters";
import { client } from "./kubernetes/client";

export default {
  quit,
  minimize,
  getNamespaces,
  connect,
  clusters,
  client,
};
