var mongodb = require("@onehilltech/blueprint-mongodb")
  ;

var carSchema = mongodb.Schema ({
  carMake: {type: String, required: true},
  carModel: {type: String, required: true},
  carMiles: {type: Number, required: true}
});

module.exports = mongodb.model("car", carSchema, "cars");
