const {
  getProfiles,
  getProfileById,
  addProfile,
} = require("../controllers/profile.controller");

const router = require("express").Router();

router.post("/", addProfile);
router.get("/", getProfiles);
router.get("/:profileId", getProfileById);

module.exports = {
  router,
};
