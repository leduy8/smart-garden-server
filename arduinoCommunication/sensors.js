// Arduino communication
// const { Arduino } = require("../models/arduino");
// const { setAutomatedTimeout } = require("./utils/automatedTimeout");
// const arduino = new Arduino("/dev/ttyACM0");

// let sensorsData = null;
// let pumpWaterFinishedNoti = null;

//   setAutomatedTimeout(() => {
//     arduino.getSensorsData((responseData) => {
//       sensorsData = responseData;
//       console.log(sensorsData);
//     });
//   })

// setAutomatedTimeout(() => {
// 	arduino.pumpWater((responseData) => {
// 		pumpWaterFinishedNoti = responseData;
// 		console.log(pumpWaterFinishedNoti);
// 	});
// });

module.exports = function (io) {
  io.on("connect", (socket) => {
    socket.on("getSensorsData", () => {
      // setAutomatedTimeout(() => {
      //   arduino.getSensorsData((responseData) => {
      //     socket.emit("returnSensorsData", responseData);
      //   });
      // });
      socket.emit("returnSensorsData", {
        temperature: 26,
        humidity: 70,
        soilMoisture: 69.6,
      });
    });
  });
};
