const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const ResourceController = mongodb.ResourceController;
const Diagnostic = require('../models/Diagnostic');

function DiagnosticController() {
  ResourceController.call(this, {model: Diagnostic});
}

blueprint.controller(DiagnosticController, ResourceController);
