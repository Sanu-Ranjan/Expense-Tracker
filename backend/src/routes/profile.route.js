const {
  getProfiles,
  getProfileById,
  addProfile,
  updateProfile,
  deleteProfile,
} = require("../controllers/profile.controller");

const router = require("express").Router();

router.post("/", addProfile);
router.get("/", getProfiles);
router.get("/:profileId", getProfileById);
router.put("/:profileId", updateProfile);
router.delete("/:profileId", deleteProfile);
module.exports = {
  router,
};
