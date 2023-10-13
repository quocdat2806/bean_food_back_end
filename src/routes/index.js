const userRouter = require("./user.js");

function router(app) {
  app.use("/user", userRouter);
}
module.exports = router;
