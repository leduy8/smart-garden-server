const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const _serialCommunication = Symbol();
const _parser = Symbol();

class Arduino {
	constructor(path, baudRate = 9600) {
		this[_parser] = new Readline();

		this[_serialCommunication] = new SerialPort(path, { baudRate });
		this[_serialCommunication].pipe(this[_parser]);

		this[_serialCommunication].on("open", (err) => {
			if (err) throw new Error("No connection to Arduino: ", err.message);

			this[_serialCommunication].on("error", (err) => {
				throw new Error("An unexpected error has occured: ", err.message);
			});

			console.log("Connected to Arduino");
		});

		this[_parser].on("data", (response) => {
			const json = JSON.parse(response);
		});
	}

	getSensorsData() {
		setTimeout(() => {
			this[_serialCommunication].write("getSensorsData", (err) => {
				if (err) throw new Error("Error on write: ", err.message);

				console.log("Getting sensors data...");
				this[_serialCommunication].flush((err, results) => {});
			});
		}, 5000);

		this[_parser].on("data", (response) => {
			console.log(JSON.parse(response));
		});
	}

	pumpWater() {
		setTimeout(() => {
			this[_serialCommunication].write("pumpWater", (err) => {
				if (err) throw new Error("Error on write: ", err.message);

				console.log("Pumping water...");
				this[_serialCommunication].flush((err, results) => {});
			});
		}, 5000);
	}
}

module.exports.Arduino = Arduino;
