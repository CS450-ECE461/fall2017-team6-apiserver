const mongodb = require('@onehilltech/blueprint-mongodb')
  ;

const SCHEMA_NAME = 'account';
const schema = new mongodb.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  birthday: {type: Date, required: true},
  phoneNumber: {type: String, required: true},
  gender: {type: String, required: true},
  carModel: {type: String, required: true},
  carMake: {type: String, required: true},
  carMiles: {type: Number, required: true},
});

module.exports = mongodb.resource(SCHEMA_NAME, schema, SCHEMA_NAME + 's');
