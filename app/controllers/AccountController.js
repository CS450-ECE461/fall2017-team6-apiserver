var blueprint = require ('@onehilltech/blueprint')
  , mongodb   = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Account   = require ('../models/Account')
  ;

function AccountController () {
  ResourceController.call (this, {model: Account});
}

blueprint.controller (AccountController, ResourceController);
