const mongodb = require('@onehilltech/blueprint-mongodb');
// const Car = require('../models/Car');

const schema = new mongodb.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  password_hash: {type: String, required: true},
  password_salt: {type: String, required: true},
  birthday: {type: Date, required: true},
  phoneNumber: {type: String, required: true},
  gender: {type: String, required: true},
  // cars: [Car],
  cars: [{type: mongodb.Schema.Types.ObjectId, ref: 'Car'}],
  _id: {type: String, required: true},
});

module.exports = exports = mongodb.resource('user', schema, 'users');
