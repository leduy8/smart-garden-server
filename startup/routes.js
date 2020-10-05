const express = require("express");
const plantStatus = require("../routes/plantStatuses");
const pumpWater = require("../routes/pumpWater");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/plantStatus", plantStatus);
  app.use("/api/pumpWater", pumpWater);
};
