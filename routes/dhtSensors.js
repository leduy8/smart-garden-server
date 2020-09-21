const express = require("express");
const router = express.Router();
const { DHT } = require("../models/dhtSensor");

// const dht = [
//   { temperature: 30, airHumidity: 69 },
//   { temperature: 26, airHumidity: 69 },
//   { temperature: 30, airHumidity: 71 },
// ];

router.get("/", async (req, res) => {
  const dhts = await DHT.find();
  res.send(dhts);
});

router.post("/", async (req, res) => {
  let dht = new DHT({
    temperature: req.body.temperature,
    airHumidity: req.body.airHumidity,
  });
  await dht.save();
  res.send(dht);
});

module.exports = router;
