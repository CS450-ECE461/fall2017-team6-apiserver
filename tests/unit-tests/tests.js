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
	    carModel: 'Camry', carMiles: new Number(132000), _id: '4'
	  }
        };
       blueprint.testing.request('http://localhost:5000')
        .post('/account')
        .send(data)
        .expect(200, done);
      });
    });
  });
});
