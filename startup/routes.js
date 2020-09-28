const express = require("express");
const plantStatus = require("../routes/plantStatuses");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/plantStatus", plantStatus);
};
