const express = require("express");
const router = express.Router();

// GET /check
router.get("/check", (req, res) => {
  res.send("Server is running fine!");
});

module.exports = router;
