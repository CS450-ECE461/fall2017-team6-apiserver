const mongodb = require('@onehilltech/blueprint-mongodb');
const Car = require('../models/Car');

const schema = new mongodb.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  birthday: {type: Date, required: true},
  phoneNumber: {type: String, required: true},
  gender: {type: String, required: true},
  cars: [Car],
  _id: {type: String, required: true},
});

const COLLECTION_NAME = 'users';
const MODEL_NAME = 'user';

module.exports = mongodb.resource(MODEL_NAME, schema, COLLECTION_NAME);
