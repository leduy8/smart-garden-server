const express = require("express");
const app = express();
const mongoose = require("mongoose");
const sensor = require("./routes/sensors");
const plantStatus = require("./routes/plantStatuses");

// Arduino communication
const { Arduino } = require("./models/arduino");
const arduino = new Arduino("/dev/ttyACM0");

let sensorsData = null;

arduino.getSensorsData((data) => {
	sensorsData = data;
	console.log(sensorsData);
});

arduino.pumpWater();

app.use(express.json());
app.use("/api/sensors", sensor);
app.use("/api/plantStatus", plantStatus);

app.get("/", (req, res) => {
	const parsed = JSON.parse('{"testPassed": true}');
	res.send(parsed);
});

if ((process.env.NODE_ENV = "test")) {
	mongoose.connect(
		"mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden-test?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
} else {
	mongoose.connect(
		"mongodb+srv://duy123:duy123456@cluster0.zt66n.mongodb.net/smart-garden?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
	console.log(`Connected to port ${port}...`)
);

module.exports = server;
