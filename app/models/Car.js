const mongodb = require('@onehilltech/blueprint-mongodb');

// eslint-disable-next-line
const carSchema = mongodb.Schema({
  make: {type: String, required: true},
  model: {type: String, required: true},
  miles: {type: Number, required: true},
});

module.exports = exports = mongodb.resource('car', carSchema, 'cars');
