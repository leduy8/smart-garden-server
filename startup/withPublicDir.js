const path = require("path");
const express = require("express");

module.exports = function (app) {
  // Set static folder
  app.use(express.static(path.join(__dirname, "../public")));
};
