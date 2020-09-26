const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Waiting for Arduino to finish");
});

module.exports = router;
