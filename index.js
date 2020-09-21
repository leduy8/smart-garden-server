const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dht = require("./routes/dhtSensors");
const soil = require("./routes/soilSensors");

app.use(express.json());
app.use("/api/dht", dht);
app.use("/api/soil", soil);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connect(
  "mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Connected to port ${port}`));

module.exports = server;
