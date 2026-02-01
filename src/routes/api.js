// src/routes/api.js

const express = require("express");
const router = express.Router();

const { apiKeyAuth } = require("../middleware/apiKeyAuth");

/**
 * Starter endpoint to prove the API works.
 */

// GET endpoint
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
  });
});

// POST endpoint (REQUIRED for Checkpoint 2)
router.post("/echo", (req, res) => {
  res.json({
    message: "POST endpoint working",
    received: req.body,
  });
});

// Protected endpoint (Authentication proof)
router.get("/me", apiKeyAuth, (req, res) => {
  res.json({
    user: "demo-user",
    auth: "api key",
    note: "If API_KEY is set, this route requires header x-api-key",
  });
});

module.exports = { router };
