const mongoose = require("mongoose");

const dhtSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  airHumidity: { type: Number, required: true },
});

const DHT = mongoose.model("dht", dhtSchema);

module.exports.DHT = DHT;
