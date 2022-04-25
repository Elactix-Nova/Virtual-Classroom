const config = require("./config");
const { app, logger } = require("./server");

app.listen(config.port, '0.0.0.0', () => {
  logger.info(`Listening on http://0.0.0.0:${config.port}`);
});
