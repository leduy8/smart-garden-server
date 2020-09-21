const express = require("express");
const router = express.Router();
const { Soil } = require("../models/soilSensor");

// const soil = [{ percentage: 26 }, { percentage: 28 }, { percentage: 46 }];

router.get("/", async (req, res) => {
  const soils = await Soil.find();

  res.send(soils);
});

router.post("/", async (req, res) => {
  const soil = new Soil({
    percentage: req.body.percentage,
  });
  await soil.save();
  res.send(soil);
});

module.exports = router;
