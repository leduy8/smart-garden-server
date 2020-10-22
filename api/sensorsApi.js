const axios = require("axios");

module.exports.getSensorsData = function (callback, error) {
  axios
    .get("http://localhost:3001/api/sensors")
    .then((response) => callback(response))
    .catch((err) => error(err));
};

module.exports.pumpWater = function (callback, error) {
  axios
    .get("http://localhost:3001/api/pumpWater")
    .then((response) => callback(response))
    .catch((err) => error(err));
};
