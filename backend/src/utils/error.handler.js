const { sendResponse } = require("./sendResponse");

const errorHandler = async (req, res, next) => {
  const message = err.status === 500 ? "Internal server error" : err.message;
  console.log(err);
  res.status(err.status || 500).json(sendResponse.fail(message));
};

module.exports = {
  errorHandler,
};
