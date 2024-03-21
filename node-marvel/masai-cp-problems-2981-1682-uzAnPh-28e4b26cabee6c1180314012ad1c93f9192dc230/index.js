// index.js

const express = require("express");
const bodyParser = require("body-parser");
const marvelRoutes = require("./routes/marvelRoutes");
const dcRoutes = require("./routes/dcRoutes");
// const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(bodyParser.json());

// Define logger middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Register the logger middleware
app.use(loggerMiddleware);

app.use("/marvel", marvelRoutes);
app.use("/dc", dcRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Welcome new Team Member, You are about to be the part of the best Superhero Team Out there!!!</h1>"
    );
});

app.get("/winningteam", (req, res) => {
  // Retrieve the winning team data and send it as a response
  res.status(200).json(winningTeamData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
