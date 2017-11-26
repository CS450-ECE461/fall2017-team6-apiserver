var mongodb = require('@onehilltech/blueprint-mongodb')
  ;

var mechanicSchema = mongdb.Schema({
  company_name: {type: String, required: true},
  address: {type: String, required: true},
  bio: {type: String, required: true}

});

module.exports = mongodb.model('mechanic', mechanicSchema, 'mechanics');
