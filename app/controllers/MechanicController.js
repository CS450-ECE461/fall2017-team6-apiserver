var blueprint = require ('@onehilltech/blueprint')
  , mongodb   = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Mechanic   = require ('../models/Mechanic')
  ;

function MechanicController () {
   ResourceController.call(this, {model: Mechanic});
}

blueprint.controller (MechanicController, ResourceController);
