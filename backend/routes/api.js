const express = require("express");
const router = express.Router();

// GET endpoint
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// POST endpoint
router.post("/data", (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

module.exports = router;
