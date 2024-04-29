const { quit } = require("./electron/quit");
const { minimize } = require("./electron/minimize");
const { getNamespaces } = require("./kubernetes/namespaces");
const { connect } = require("./kubernetes/connect");
const { clusters } = require("./kubernetes/clusters");
const { client } = require("./kubernetes/client");

module.exports = {
  quit,
  minimize,
  getNamespaces,
  connect,
  clusters,
  client,
};
