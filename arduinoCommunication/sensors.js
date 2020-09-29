// Arduino communication
const { Arduino } = require("../models/arduino");
const { setAutomatedTimeout } = require("../utils/automatedTimeout");
const arduino = new Arduino("/dev/ttyACM0");

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      setAutomatedTimeout(() => {
        arduino.getSensorsData((responseData) => {
          socket.emit("returnSensorsData", responseData);
        });
      });
    });
  });
};

module.exports.pumpWater = function (io) {
  io.on("connect", (socket) => {
    socket.on("pumpWaterRequest", () => {
      setAutomatedTimeout(() => {
        arduino.pumpWater((responseData) => {
          socket.emit("pumpWaterResponse", responseData);
        });
      });
    });
  });
};
