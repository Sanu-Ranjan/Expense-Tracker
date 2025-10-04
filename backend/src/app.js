const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello there!!`);
});

console.log(` this is ${process.env.NODE_ENV}`);
module.exports = {
  app,
};
