const axios = require("axios");
const { setAutomatedTimeout } = require("./../utils/automatedTimeout");

module.exports.getSensorsData = function (callback, error) {
  setAutomatedTimeout(() =>
    axios
      .get("http://localhost:3001/api/sensor")
      .then((response) => callback(response))
      .catch((err) => error(err))
  );
};

module.exports.pumpWater = function (callback, error) {
  setAutomatedTimeout(() =>
    axios
      .get("http://localhost:3001/api/pumpWaters")
      .then((response) => callback(response))
      .catch((err) => error(err))
  );
};
