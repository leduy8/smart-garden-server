const api = require("../api/sensorsApi");

module.exports.getSensorsData = function (io) {
  io.on("connect", (socket) => {
    setInterval(() => {
      api.getSensorsData(
        (response) => socket.emit("returnSensorsData", response.data),
        (err) => console.log(err)
      );
    }, 2000);
  });
};

module.exports.pumpWater = function (io) {
  io.on("connect", (socket) => {
    socket.on("pumpWaterRequest", () => {
      api.pumpWater(
        (response) => socket.emit("pumpWaterResponse", response.data),
        (err) => console.log(err)
      );
    });
  });
};
