const { getAccounts } = require("../controllers/account.controller");

const router = require("express").Router();

router.get("/:profileId", getAccounts);
//router.post("/",addAccount);
//router.delete("/",deleteAccount);

module.exports = {
  router,
};
