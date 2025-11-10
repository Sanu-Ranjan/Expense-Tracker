const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./utils/error.handler");
const profileRoutes = require("./routes/profile.route");
const accountRoutes = require("./routes/account.route");

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/profiles", profileRoutes.router);
app.use("api/v1/profiles", accountRoutes.router);

app.use(errorHandler);

console.log(` this is ${process.env.NODE_ENV}`);
module.exports = {
  app,
};
