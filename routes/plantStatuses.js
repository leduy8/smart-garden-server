const express = require("express");
const router = express.Router();
const { PlantStatus, validatePlantStatus } = require("../models/plantStatus");

// TODO: Paginate documents
router.get("/", async (req, res) => {
  const plantStatus = await PlantStatus.find()
    .sort({ timestamp: -1 })
    .limit(20);
  res.send(plantStatus);
});

// TODO: Add imgURL
router.post("/", async (req, res) => {
  const { error } = validatePlantStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let plantStatus = new PlantStatus({
    ...req.body,
  });
  await plantStatus.save();
  res.send(plantStatus);
});

module.exports = router;
