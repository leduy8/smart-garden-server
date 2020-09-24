const express = require("express");
const router = express.Router();
const { Sensor, validateSensor } = require("../models/sensor");

router.get("/", async (req, res) => {
  const sensors = await Sensor.findOne().sort({ timestamp: -1 }).limit(1);
  res.send(sensors);
});

router.post("/", async (req, res) => {
  const { error } = validateSensor(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const timestamp = new Date().getTime().toString();

  let sensor = new Sensor({
    temperature: req.body.temperature,
    airHumidity: req.body.airHumidity,
    soilMoisture: req.body.soilMoisture,
    timestamp: timestamp,
  });
  await sensor.save();
  res.send(sensor);
});

module.exports = router;
