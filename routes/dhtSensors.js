const express = require("express");
const router = express.Router();

const dht = [
  { temperature: 30, airHumidity: 69 },
  { temperature: 26, airHumidity: 69 },
  { temperature: 30, airHumidity: 71 },
];

router.get("/", (req, res) => {
  res.send(dht);
});

module.exports = router;
