const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const ResourceController = mongodb.ResourceController;
const Mechanic = require('../models/Mechanic');

class MechanicController {
  constructor() {
    ResourceController.call(this, {model: Mechanic});
  }
}

blueprint.controller(MechanicController, ResourceController);
module.exports = exports = MechanicController;
