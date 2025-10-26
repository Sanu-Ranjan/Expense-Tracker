const { customError } = require("../utils/custom.error");
const { safeQuery } = require("../utils/safeQuerry.wrapper");
const { Profile } = require("../models");
const { sendResponse } = require("../utils/sendResponse");
const { schemas } = require("../utils/validate.with.joi");

const getProfiles = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = customError({
        message: "User id not detected",
        origin: "profile route: getProfiles",
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
      error.origin = "profile route: getProfiles ";
      error.message = "sequelize error";
      throw error;
    }
    res.status(200).json(sendResponse.success("user Profiles", data));
  } catch (error) {
    next(error);
  }
};

const getProfileById = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = customError({
        message: "User id not detected",
        origin: "profile route: getProfileById",
        status: 500,
      });
      throw error;
    }
    const { profileId } = req.params;
    const { err, value } = validate({ profileId: Joi.number() }, { profileId });

    if (err)
      return res.status(400).json(sendResponse.fail(err.details[0].message));

    const { error, data } = await safeQuery(
      Profile.findOne({
        where: {
          id: value.profileId,
          userId: userId,
        },
      })
    );

    if (error) {
      throw customError({ origin: "Profile route: getProfileById" });
    }

    res.send(404).json(sendResponse.success("Profile fetched", data));
  } catch (error) {
    next(error);
  }
};

const addProfile = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      const error = customError({
        message: "User id not detected",
        origin: "profile route: addProfile",
        status: 500,
      });
      throw error;
    }
    const { profileName, profilePurpose, additionalInfo } = req.body;

    const { error: err } = schemas.profile.validate({
      profileName,
      profilePurpose,
      additionalInfo,
    });

    if (err)
      return res
        .status(400)
        .json(sendResponse.fail("Invalid data", err.details[0].message));

    const { error, data } = await safeQuery(
      Profile.create({ profileName, profilePurpose, additionalInfo })
    );

    if (error) throw customError({ origin: "Profile route: addProfile" });

    res.status(200).json(sendResponse.success("Profile created", data));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfiles,
  getProfileById,
  addProfile,
};
