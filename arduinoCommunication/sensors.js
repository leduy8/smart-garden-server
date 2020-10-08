const axios = require("axios");
const { setAutomatedTimeout } = require("./../utils/automatedTimeout");

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      setAutomatedTimeout(() =>
        axios
          .get("http://localhost:3001/api/sensors")
          .then((response) => socket.emit("returnSensorsData", response.data))
          .catch((err) => console.log(err))
      );
      //* For testing only
      // socket.emit("returnSensorsData", {
      //   data: {
      //     temperature: 20,
      //     humidity: 69,
      //     soilMoisture: 69,
      //   },
      //   prompt: "abc",
      // });
    });
  });
};

module.exports.pumpWater = function (io) {
  io.on("connect", (socket) => {
    socket.on("pumpWaterRequest", () => {
      setAutomatedTimeout(() =>
        axios
          .get("http://localhost:3001/api/pumpWater")
          .then((response) => socket.emit("pumpWaterResponse", response.data))
          .catch((err) => console.log(err))
      );
      //* For testing only
      // socket.emit("pumpWaterResponse", {
      //   data: {
      //     message: "Done pumping",
      //   },
      //   prompt: "bcd",
      // });
    });
  });
};
