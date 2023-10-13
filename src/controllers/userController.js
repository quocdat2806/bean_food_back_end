const User = require("../models/user.js");
class UserController {
  getAllUser(req, res, next) {
    User.find({})
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch(next);
  }
}
module.exports = new UserController();
