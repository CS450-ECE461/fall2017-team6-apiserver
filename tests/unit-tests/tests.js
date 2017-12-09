'use strict';

const blueprint = require ('@onehilltech/blueprint')
  , expect = require ('chai').expect
  , lib       = require ('@onehilltech/blueprint/lib')
  , testing   = lib.testing
  ;

describe ("MongoDB Test", function () {
  var user;

  describe("/account", function () {
    describe ("POST", function () {
      it ("it should create a user", function (done) {
	var data = {
	  user: {
	    first_name: 'Cory', last_name: 'Lehnert', email: 'corylehnert@no-replay.com', 
	    birthday: new Date(), phoneNumber: '123-456-7890', gender: 'Male', carMake: 'Toyota',
	    carModel: 'Camry', carYear: '2001', carMiles: new Number(132000), 
            _id: '365897412321475582126548'
	  }
        };
       blueprint.testing.request('http://localhost:5000')
        .post('/account')
        .send(data)
        .expect(200, done);
      });

    });

    describe ("GET", function () {
      it("should fetch all users from the database", function (done) {

        blueprint.testing.request('http://localhost:5000')
          .get('/account')
          .expect(200, done);
      });

      it("shoudl fetch one user from the database by using its _id property", function (done) {

	blueprint.testing.request('http://localhost:5000')
          .get('/account/365897412321475582126548')
          .expect(200, done);
      });

    });

  });

  describe ("/mechanic", function () {
    describe ("POST", function () {
      it("should create a record of a mechanic", function (done) {
        var data = {
          mechanic: {
           company_name: "Max's Towing and Maintance", 
           address: '1234 Car Road New York City, New York 36753',
           bio: 'Our company can repair anything that ails your car',
           rating: '4/5'
          }
        };
        blueprint.testing.request('http://localhost:5000')
          .post('/mechanic')
          .send(data)
          .expect(200, done);

      });

    });

    describe ("GET", function() {
      it("should retrieve all mechanic page information", function (done) {
        blueprint.testing.request('http://localhost:5000')
          .get('/mechanic')
          .expect(200, done);
      });
    
    });

  });

  describe ("/diagnostic", function () {
    describe ("POST", function () {
      it("should create a record of a diagnostic form", function (done) {
        var data = {
          diagnostic: {
           problem: "Steering is sticking", weather: "Hot",
           drivingCond: "70 mph, 2000 rpm, accelerating", engineTemp: "50 C",
           dcFrequency: "Frequent", fuelType: "Unleaded", fuelBrand: "Speedway",
           milesAt: "145000", occurRate: "Gradually"
          }
        };
        blueprint.testing.request('http://localhost:5000')
          .post('/diagnostic')
          .send(data)
          .expect(200, done);

      });

    });

    describe ("GET", function() {
      it("should retrieve all diagnostic page information", function (done) {
        blueprint.testing.request('http://localhost:5000')
          .get('/diagnostic')
          .expect(200, done);
      });
    
    });

  });

});
