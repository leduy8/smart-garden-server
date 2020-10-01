const { setAutomatedTimeout } = require("../utils/automatedTimeout");
const { ArduinoCommunication } = require("./init");

const arduino = ArduinoCommunication.getInstance();
const arduino2 = ArduinoCommunication.getInstance();
console.log(arduino === arduino2);

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      setAutomatedTimeout(() => {
        arduino.getSensorsData((responseData) => {
          socket.emit("returnSensorsData", responseData);
        });
      });
      // socket.emit("returnSensorsData", {
      //   temperature: 26,
      //   humidity: 60,
      //   soilMoisture: 69,
      // });
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
      // socket.emit("pumpWaterResponse", { message: "Done pumping!" });
    });
  });
};
