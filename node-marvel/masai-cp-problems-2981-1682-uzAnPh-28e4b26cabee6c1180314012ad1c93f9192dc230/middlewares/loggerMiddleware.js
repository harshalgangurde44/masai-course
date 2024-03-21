const fs = require("fs");

const loggerMiddleware = (req, res, next) => {
  const log = `Method:${req.method}, Route:${req.url}, user-agent:${req.headers["user-agent"]}\n`;
  fs.appendFileSync("logs.txt", log);
  next();
};

module.exports = loggerMiddleware;
