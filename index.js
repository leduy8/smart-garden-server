const express = require("express");
const app = express();
const server = require("http").createServer(app);

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/cors")(app);
require("./startup/withPublicDir")(app);

const port = process.env.PORT || 3000;
const expressServer = server.listen(port, () =>
  console.log(`Connected to port ${port}...`)
);

module.exports = expressServer;
