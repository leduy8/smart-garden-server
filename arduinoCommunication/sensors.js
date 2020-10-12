const api = require("../api/sensorsApi");

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      api.getSensorsData((response) =>
        socket.emit("returnSensorsData", response.data)
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
      api.pumpWater((response) =>
        socket.emit("pumpWaterResponse", response.data)
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
