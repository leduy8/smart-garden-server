const axios = require("axios");
const { setAutomatedTimeout } = require("./../utils/automatedTimeout");

module.exports.getSensorsData = function (io) {
	io.on("connect", (socket) => {
		socket.once("getSensorsData", () => {
			setAutomatedTimeout(() =>
				axios
					.get("http://localhost:3001/api/sensors")
					.then((response) => socket.emit("returnSensorsData", response.data))
					.catch((err) => console.log(err))
			);
		});
	});
};

module.exports.pumpWater = function (io) {
	io.on("connect", (socket) => {
		socket.once("pumpWaterRequest", () => {
			setAutomatedTimeout(() =>
				axios
					.get("http://localhost:3001/api/pumpWater")
					.then((response) => socket.emit("pumpWaterResponse", response.data))
					.catch((err) => console.log(err))
			);
		});
	});
};
