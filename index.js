const express = require("express");
const app = express();
const dht = require("./routes/dhtSensors");
const soil = require("./routes/soilSensors");

app.use(express.json());
app.use("/api/dht", dht);
app.use("/api/soil", soil);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Connected to port ${port}`));
