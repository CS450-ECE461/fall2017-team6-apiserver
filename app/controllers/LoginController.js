const blueprint = require('@onehilltech/blueprint');
const User = require('../models/User');

/** Constructor for account controller */
function LoginController() {
  blueprint.BaseController.call(this, {model: User});
}

blueprint.controller(LoginController, blueprint.BaseController);

LoginController.prototype.login = function() {
  return (req, res) => {
    // do nothing
  };
};

module.exports = exports = LoginController;
