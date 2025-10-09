const customError = ({ message, origin, status } = {}) => {
  const errorObj = new Error(message);
  errorObj.origin = origin;
  errorObj.status = status;
  errorObj.timeStamp = new Date();
  return errorObj;
};

module.exports = {
  customError,
};
