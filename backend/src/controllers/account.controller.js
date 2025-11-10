const { customError } = require("../utils/custom.error");
const { safeQuery } = require("../utils/safeQuerry.wrapper");
const { Account } = require("../models");
const { sendResponse } = require("../utils/sendResponse");
const { schemas, validate } = require("../utils/validate.with.joi");

const getAccounts = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = customError({
        message: "User id not detected",
        origin: "account route: getAccount",
        status: 500,
      });
      throw error;
    }

    const { profileId } = req.params;
    const { err, value } = validate({ profileId: Joi.number() }, { profileId });
    if (err)
      return res.status(400).json(sendResponse.fail(err.details[0].message));

    const { data, error } = await safeQuery(
      Account.findAll({
        where: {
          profileId: profileId,
          userId: userId,
        },
      })
    );

    if (error) {
      error.origin = "account route: getAccount ";
      error.message = "sequelize error";
      throw error;
    }

    res.status(200).json(sendResponse.success("Accounts fetched", data));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAccounts,
};
