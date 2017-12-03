const mongodb = require('@onehilltech/blueprint-mongodb');

// eslint-disable-next-line
const diagnosticSchema = mongodb.Schema({
  problem: {type: String, required: true},
  weather: {type: String, required: true},
  drivingCond: {type: String, required: true},
  engineTemp: {type: String, required: true},
  dcFrequency: {type: String, required: true},
  fuelType: {type: String, required: true},
  fuelBrand: {type: String, required: false},
  milesAt: {type: String, required: true},
  occurRate: {type: String, required: true},
});

module.exports = exports = mongodb.resource(
  'diagnostic', diagnosticSchema, 'diagnostics');
