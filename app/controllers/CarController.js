const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const ResourceController = mongodb.ResourceController;
const Car = require('../models/Car');

class CarController {
  constructor() {
    ResourceController.call(this, {model: Car});
  }
}

blueprint.controller(CarController, ResourceController);
module.exports = exports = CarController;
