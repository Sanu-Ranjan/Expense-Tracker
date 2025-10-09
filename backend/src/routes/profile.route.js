const { getProfiles } = require("../controllers/profile.controller");

const router = require("express").Router();

router.get("/", getProfiles);

module.exports = {
  router,
};
