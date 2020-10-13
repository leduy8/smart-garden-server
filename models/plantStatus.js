const mongoose = require("mongoose");
const Joi = require("joi");

const plantStatusSchema = new mongoose.Schema({
  temperature: { type: Number, min: -50, max: 60, required: true },
  airHumidity: { type: Number, min: 0, max: 100, required: true },
  soilMoisture: { type: Number, min: 0, max: 100, required: true },
  healthStatus: { type: String, required: true },
  imgURL: { type: String, required: true },
  timestamp: { type: String, required: true },
  waterFlow: { type: Number, min: 0, required: true },
});

const PlantStatus = mongoose.model("plant status", plantStatusSchema);

function validatePlantStatus(plantStatus) {
  const schema = Joi.object({
    temperature: Joi.number().min(-50).max(60).required(),
    airHumidity: Joi.number().min(0).max(100).required(),
    soilMoisture: Joi.number().min(0).max(100).required(),
    healthStatus: Joi.string().required(),
    imgURL: Joi.string().required(),
    timestamp: Joi.string().required(),
    waterFlow: Joi.number().min(0).required(),
  });

  return schema.validate(plantStatus);
}

module.exports.PlantStatus = PlantStatus;
module.exports.validatePlantStatus = validatePlantStatus;
