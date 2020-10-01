const { setAutomatedTimeout } = require("../utils/automatedTimeout");
const { ArduinoCommunication } = require("./init");

const arduino = ArduinoCommunication.getInstance();
console.log(arduino);

module.exports.getSensorsData = function (io) {
  console.log(arduino);
  io.on("connect", (socket) => {
    console.log(arduino);
    socket.on("getSensorsData", () => {
      setAutomatedTimeout(() => {
        console.log(arduino);
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
