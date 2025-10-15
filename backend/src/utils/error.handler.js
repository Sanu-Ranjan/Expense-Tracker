const { sendResponse } = require("./sendResponse");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  const message = err.status === 500 ? "Internal server error" : err.message;
  res.status(err.status || 500).json(sendResponse.fail(message));
};

module.exports = {
  errorHandler,
};
