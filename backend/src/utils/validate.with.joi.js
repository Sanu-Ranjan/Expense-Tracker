const Joi = require("joi");

const schemas = {
  user: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
  profile: Joi.object({
    profileName: Joi.string().required(),
    profilePurpose: Joi.string().required(),
    additionalInfo: Joi.string().required(),
    userId: Joi.number().required(),
  }),
  accounts: Joi.object({
    bankDetails: Joi.string().required(),
    openingBalance: Joi.number().default(0.0),
    profileId: Joi.number().required(),
    userId: Joi.number().required(),
  }),
  ToDos: Joi.object({
    task: Joi.string().required(),
    date: Joi.date().required(),
    profileId: Joi.number().required(),
    userId: Joi.number().required(),
  }),
  Expenses: Joi.object({
    date: Joi.date().required(),
    isDebit: Joi.boolean().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    accounts: Joi.number().required(),
    profileId: Joi.number().required(),
    userId: Joi.number().required(),
  }),
};

module.exports = {
  schemas,
};
