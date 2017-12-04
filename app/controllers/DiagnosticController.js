const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const ResourceController = mongodb.ResourceController;
const Diagnostic = require('../models/Diagnostic');

class DiagnosticController {
  constructor() {
    ResourceController.call(this, {model: Diagnostic});
  }
}

blueprint.controller(DiagnosticController, ResourceController);
module.exports = exports = DiagnosticController;
