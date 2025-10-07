require("../config/check");
const { app } = require("./app");
const { database } = require("./database/connection");

const port = process.env.PORT || 3000;

(async () => {
  try {
    await database.sync({ force: true });
    app.listen(port, () => {
      console.log(`listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
