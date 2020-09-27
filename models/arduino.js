const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

const _serialCommunication = Symbol();
const _parser = Symbol();

class Arduino {
	constructor(path, baudRate = 9600) {
		this[_parser] = new Readline();

		this[_serialCommunication] = new SerialPort(path, { baudRate });
		this[_serialCommunication].pipe(parser);

		this[_serialCommunication].on("open", (err) => {
			if (err) throw new Error("No connection to Arduino: ", err.message);

			this[_serialCommunication].on("error", (err) => {
				throw new Error("An unexpected error has occured: ", err.message);
			});

			console.log("Connected to Arduino");
		});
	}

	getSensorsData() {
		this[_serialCommunication].write("getSensorsData", (err) => {
			if (err) throw new Error("Error on write: ", err.message);

			console.log("Getting sensors data...");
		});

		this[_parser].on("data", (sensorsData) => JSON.parse(sensorsData));
	}

	pumpWater() {
		this[_serialCommunication].write("pumpWater", (err) => {
			if (err) throw new Error("Error on write: ", err.message);

			console.log("Pumping water...");
		});

		this[_parser].on("data", (finishedNotification) =>
			console.log(finishedNotification)
		);
	}
}
