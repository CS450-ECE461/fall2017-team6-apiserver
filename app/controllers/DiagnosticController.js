var blueprint = require ('@onehilltech/blueprint')
  , mongodb   = require ('@onehilltech/blueprint-mongodb')
  , ResourceController = mongodb.ResourceController
  , Diagnostic   = require ('../models/Diagnostic')
  ;

function DiagnosticController () {
  ResourceController.call(this, {model: Diagnostic});
}

blueprint.controller (DiagnosticController, ResourceController);
module.exports = exports = DiagnosticController;
