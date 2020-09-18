const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("dht sensor send back data");
});

module.exports = router;
