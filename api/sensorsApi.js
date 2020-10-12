const axios = require("axios");
const { setAutomatedTimeout } = require("./../utils/automatedTimeout");

module.exports.getSensorsData = function (callback) {
  setAutomatedTimeout(() =>
    axios
      .get("http://localhost:3001/api/sensors")
      .then((response) => callback(response))
      .catch((err) => console.log(err))
  );
};

module.exports.pumpWater = function () {
  setAutomatedTimeout((callback) =>
    axios
      .get("http://localhost:3001/api/pumpWater")
      .then((response) => callback(response))
      .catch((err) => console.log(err))
  );
};
