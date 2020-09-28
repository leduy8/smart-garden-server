const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const { delete } = require("../routes/sensors");

const _subscribers = Symbol();

class Observer {
	constructor() {
		this[_subscribers] = {};
	}

	subscribe(prompt, func) {
		this[_subscribers][prompt] = func;
	}

	unsubscribe(prompt) {
		delete this[_subscribers][prompt];
	}

	notify(prompt, data) {
		this[_subscribers][prompt](data);
	}
}

const _serialCommunication = Symbol();
const _parser = Symbol();
const _observer = Symbol();

class Arduino {
	constructor(path, baudRate = 9600) {
		this[_observer] = new Observer();
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
			const JSONResponse = JSON.parse(response);
			this[_observer].notify(JSONResponse.prompt, JSONResponse.data);
		});
	}

	getSensorsData(callback) {
		const prompt = "getSensorsData";

		this[_observer].subscribe(prompt, callback);

		setTimeout(() => {
			this[_serialCommunication].write(prompt, (err) => {
				if (err) throw new Error("Error on write: ", err.message);

				console.log("Getting sensors data...");
				this[_serialCommunication].flush((err, results) => {});
			});
		}, 5000);
	}

	pumpWater(callback) {
		const prompt = "pumpWater";

		this[_observer].subscribe(prompt, callback);

		setTimeout(() => {
			this[_serialCommunication].write(prompt, (err) => {
				if (err) throw new Error("Error on write: ", err.message);

				console.log("Pumping water...");
				this[_serialCommunication].flush((err, results) => {});
			});
		}, 5000);
	}
}

module.exports.Arduino = Arduino;
