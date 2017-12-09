var blueprint = require ('@onehilltech/blueprint')
  , mongodb   = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , User   = require ('../models/User')
  ;

function LoginController () {
  ResourceController.call(this, {model: User});
}

blueprint.controller (LoginController, ResourceController);
module.exports = exports = LoginController;
