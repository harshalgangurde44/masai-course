const fs = require("fs");
const validatorMiddleware = (req, res, next) => {
  const { role, pass } = req.query;
  if (role === "leader" && pass === "4534") {
    next();
  } else {
    res.status(401).send("You are not authorised to do this operation");
  }
};

module.exports = validatorMiddleware;
