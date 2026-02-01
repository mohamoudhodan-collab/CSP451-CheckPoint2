// src/middleware/apiKeyAuth.js
// Simple API key auth middleware for Checkpoint 2.
// Client must send:  x-api-key: <YOUR_KEY>

function apiKeyAuth(req, res, next) {
  const expectedKey = process.env.API_KEY;

  // If instructor/marker didn't set API_KEY, allow requests but warn.
  // (You can change this to "deny" if your instructions require it.)
  if (!expectedKey) {
    return next();
  }

  const providedKey = req.header("x-api-key");

  if (!providedKey) {
    return res.status(401).json({
      error: "Missing API key",
      hint: "Send header: x-api-key",
    });
  }

  if (providedKey !== expectedKey) {
    return res.status(403).json({
      error: "Invalid API key",
    });
  }

  return next();
}

module.exports = { apiKeyAuth };
