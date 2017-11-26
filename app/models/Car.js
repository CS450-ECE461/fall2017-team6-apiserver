var mongdb = require("@onehilltech/blueprint-mongodb")
  ;

var carSchema = mongodbSchema ({
  carMake: {type: String, required: true},
  carModel: {type: String, required: true},
  carMiles: {type: Number, required: true}
});

module.exports = mongodb.model("car", carSchema, "cars");
