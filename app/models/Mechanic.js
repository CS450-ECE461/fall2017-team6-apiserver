const mongodb = require('@onehilltech/blueprint-mongodb');

// eslint-disable-next-line
const mechanicSchema = mongodb.Schema({
  company_name: {type: String, required: true},
  address: {type: String, required: true},
  bio: {type: String, required: true},
});

module.exports = exports = mongodb.resource(
  'mechanic', mechanicSchema, 'mechanics');
