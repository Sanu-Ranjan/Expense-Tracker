const { customError } = require("../utils/custom.error");
const { safeQuery } = require("../utils/safeQuerry.wrapper");
const { Profile } = require("../models");
const { sendResponse } = require("../utils/sendResponse");

const getProfiles = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = customError({
        message: "User id not detected",
        origin: "profile routes: getProfiles",
        status: 500,
      });
      throw error;
    }
    const { data, error } = await safeQuery(
      Profile.findAll({
        where: {
          userId: userId,
        },
      })
    );
    if (error) {
      error.origin = "profile routes: getProfiles ";
      error.message = "sequelize error";
      throw error;
    }
    res.status(200).json(sendResponse.success("user Profiles", data));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfiles,
};
