const {
  getProfiles,
  getProfileById,
} = require("../controllers/profile.controller");

const router = require("express").Router();

router.get("/", getProfiles);
router.get("/:profileId", getProfileById);

module.exports = {
  router,
};
