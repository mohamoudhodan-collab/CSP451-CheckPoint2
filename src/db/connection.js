// src/db/connection.js
// Mock DB connection module for Checkpoint 2.
// Uses DATABASE_URL to simulate whether a DB is configured.

let state = {
  connected: false,
  lastChecked: null,
  message: "not checked yet",
  databaseUrlPresent: false,
};

function maskDatabaseUrl(url) {
  // masks passwords in URLs like: protocol://user:pass@host/db
  return url.replace(/:\/\/([^:]+):([^@]+)@/g, "://$1:***@");
}

// NOTE: Checkpoint 2 mock only — this does NOT connect to a real database.
// It only checks whether DATABASE_URL is set and looks like a valid URL.
function checkConnection() {
  const url = process.env.DATABASE_URL;

  state.lastChecked = new Date().toISOString();
  state.databaseUrlPresent = Boolean(url);

  if (!url) {
    state.connected = false;
    state.message = "DATABASE_URL is not set (mock connection failed)";
    return { ...state };
  }

  // basic validation (still mock)
  const looksLikeUrl = /^([a-z]+):\/\/./i.test(url);

  if (!looksLikeUrl) {
    state.connected = false;
    state.message = "DATABASE_URL is set but not a valid URL (mock connection failed)";
    return { ...state, databaseUrlMasked: url };
  }

  state.connected = true;
  state.message = "DATABASE_URL is set (mock connection ok)";
  return { ...state, databaseUrlMasked: maskDatabaseUrl(url) };
}

function getConnectionState() {
  return { ...state };
}

module.exports = {
  checkConnection,
  getConnectionState,
};
