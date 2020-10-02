const axios = require("axios");
const { setAutomatedTimeout } = require("../utils/automatedTimeout");
//const { ArduinoCommunication } = require("./init");

//const arduino = ArduinoCommunication.getInstance();

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      // setAutomatedTimeout(() => {
      //   arduino.getSensorsData((responseData) => {
      //     socket.emit("returnSensorsData", responseData);
      //   });
      // });
      // socket.emit("returnSensorsData", {
      //   temperature: 26,
      //   humidity: 60,
      //   soilMoisture: 69,
      // });
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
    socket.on("pumpWaterRequest", () => {
      // setAutomatedTimeout(() => {
      //   arduino.pumpWater((responseData) => {
      //     socket.emit("pumpWaterResponse", responseData);
      //   });
      // });
      // socket.emit("pumpWaterResponse", { message: "Done pumping!" });
      setAutomatedTimeout(() =>
        axios
          .get("http://localhost:3001/api/pumpWater")
          .then((response) => socket.emit("pumpWaterResponse", response.data))
          .catch((err) => console.log(err))
      );
    });
  });
};
