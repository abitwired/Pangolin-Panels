import { quit } from "./electron/quit";
import { minimize } from "./electron/minimize";
import { getNamespaces } from "./kubernetes/namespaces";
import { connect } from "./kubernetes/connect";

export default {
  quit,
  minimize,
  getNamespaces,
  connect,
};
