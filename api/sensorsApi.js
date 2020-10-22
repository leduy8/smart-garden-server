const axios = require("axios");

module.exports.getSensorsData = function (callback, error) {
  axios
    .get("http://localhost:3001/api/sensors")
    .then((response) => callback(response))
    .catch((err) => error(err));
};

module.exports.pumpWater = function (callback, error) {
  //* Flag will be true at startup
  let flag;
  let mode;
  let firstCall = true;

  if (firstCall) {
    flag = true;
    firstCall = !firstCall;
  }

  if (flag) mode = "on";
  else mode = "off";

  axios
    .get(`http://localhost:3001/api/pumpWater?mode=${mode}`)
    .then((response) => {
      callback(response);
      flag = !flag;
    })
    .catch((err) => error(err));
};
