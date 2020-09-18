const express = require("express");
const router = express.Router();

const soil = [{ percentage: 26 }, { percentage: 28 }, { percentage: 46 }];

router.get("/", (req, res) => {
  res.send(soil);
});

module.exports = router;
