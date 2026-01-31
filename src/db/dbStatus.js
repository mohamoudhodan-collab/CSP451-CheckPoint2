const { checkConnection, getConnectionState } = require("./connection");

function getDbStatus() {
  const latest = checkConnection();
  return { ...latest, note: "Checkpoint 2 mock DB status" };
}

module.exports = { getDbStatus, getConnectionState };
