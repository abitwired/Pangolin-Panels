const { getNamespaces } = require("./kubernetes/namespaces");
const { quit } = require("./electron/quit");
const { minimize } = require("./electron/minimize");

module.exports = {
  getNamespaces,
  quit,
  minimize,
};
