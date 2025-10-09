const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./utils/error.handler");

app.use(express.json());
app.use(cookieParser());

app.use(errorHandler);

console.log(` this is ${process.env.NODE_ENV}`);
module.exports = {
  app,
};
