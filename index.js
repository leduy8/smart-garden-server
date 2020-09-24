const express = require("express");
const app = express();
const mongoose = require("mongoose");
const sensor = require("./routes/sensors");

app.use(express.json());
app.use("/api/sensor", sensor);

app.get("/", (req, res) => {
  const parsed = JSON.parse('{"testPassed": true}');
  res.send(parsed);
});

mongoose.connect(
  "mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Connected to port ${port}`));

module.exports = server;
