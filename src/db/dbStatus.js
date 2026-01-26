function getDbStatus() {
  const url = process.env.DATABASE_URL;
  return {
    configured: Boolean(url),
    databaseUrl: url ? "[set]" : "[missing]",
    time: new Date().toISOString(),
  };
}

module.exports = { getDbStatus };
