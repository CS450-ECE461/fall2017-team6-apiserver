const mongodb = require('@onehilltech/blueprint-mongodb');

// eslint-disable-next-line
const carSchema = mongodb.Schema({
  carMake: {type: String, required: true},
  carModel: {type: String, required: true},
  carMiles: {type: Number, required: true},
});

module.exports = exports = mongodb.resource('car', carSchema, 'cars');
