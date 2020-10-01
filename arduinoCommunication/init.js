const { Arduino } = require("../models/arduino");

module.exports.ArduinoCommunication = (function () {
  let arduino;

  function init() {
    return new Arduino("/dev/ttyACM0");
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!arduino) {
        arduino = init();
      }
      return arduino;
    },
  };
})();
