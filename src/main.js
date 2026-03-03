const express = require("express");
const routes = require("./routes");
const logger = require("./logger");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", routes);

const server = app.listen(port, () => {
  logger.info("[MAIN] Starting");
});

process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  process.exit(0);
});

module.exports = app;
