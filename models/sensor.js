const mongoose = require("mongoose");
const Joi = require("joi");

const sensorSchema = new mongoose.Schema({
  temperature: { type: Number, min: -50, max: 60, required: true },
  airHumidity: { type: Number, min: 0, max: 100, required: true },
  soilMoisture: { type: Number, min: 0, max: 100, required: true },
  timestamp: { type: String, required: true },
});

const Sensor = mongoose.model("sensor", sensorSchema);

function validateSensor(sensor) {
  const schema = Joi.object({
    temperature: Joi.number().min(-50).max(60).required(),
    airHumidity: Joi.number().min(0).max(100).required(),
    soilMoisture: Joi.number().min(0).max(100).required(),
  });

  return schema.validate(sensor);
}

module.exports.Sensor = Sensor;
module.exports.validateSensor = validateSensor;
