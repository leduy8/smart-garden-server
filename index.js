const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/cors")(app);
require("./startup/withPublicDir")(app);

require("./gpioCommunication/sensors").getSensorsData(io);
require("./gpioCommunication/sensors").pumpWater(io);

//require("./tests/sensorTest")();

const port = process.env.PORT || 3000;
const expressServer = server.listen(port, () =>
  console.log(`Connected to port ${port}...`)
);

module.exports = expressServer;
