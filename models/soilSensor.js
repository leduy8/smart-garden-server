const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  percentage: { type: Number, required: true },
});

const Soil = mongoose.model("soil", soilSchema);

module.exports.Soil = Soil;
