const blueprint = require('@onehilltech/blueprint');
// const User = require('../models/User');

class UserController {
  constructor() {
    blueprint.BaseController.call(this);
  }

  login() {
    return (req, res) => {
      console.log(req.body.username, req.body.password);
    };
  }

  register() {
    return (req, res) => {
      // TODO implement
    };
  }
}

blueprint.controller(UserController, blueprint.BaseController);
module.exports = exports = UserController;
