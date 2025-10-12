const Joi = require("joi");

function validate(schema, valueObject) {
  const { error, value } = Joi.object(schema).validate(valueObject);
  return { err: error, value };
}
module.exports = {
  validate,
};
