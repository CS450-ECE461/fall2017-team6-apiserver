const blueprint = require('@onehilltech/blueprint');
const User = require('../models/User');

class LoginController {
  constructor() {
    blueprint.BaseController.call(this, {model: User});
  }

  login() {
    return (req, res) => {
      // do nothing
    };
  }
}

blueprint.controller(LoginController, blueprint.BaseController);
module.exports = exports = LoginController;
