const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("soil sensor send back data");
});

module.exports = router;
