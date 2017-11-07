var mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var accountSchema = mongodbSchema ({
  username: {type: String, required: true},
  password: {type: String, required: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  birthday: {type: Date, required: true},
  phoneNumber: {type: String, required: true},
  gender: {type: String, required: true},
  carModel: {type: String, required: true},
  carMake: {type: String, required: true},}
  carMiles: {type: Number, required: true}
});

module.exports = mongodb.model ('account', accountSchema);
