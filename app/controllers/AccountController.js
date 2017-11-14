const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const ResourceController = mongodb.ResourceController;
const Account = require('../models/Account');

/** Constructor for account controller */
function AccountController() {
  ResourceController.call(this, {model: Account});
}

blueprint.controller(AccountController, ResourceController);

AccountController.prototype.login = function() {
  return (req, res) => {
    // do nothing
  };
};

module.exports = exports = AccountController;
