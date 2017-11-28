'use strict';

const blueprint = require ('@onehilltech/blueprint')
  , path      = require ('path')
  , async     = require ('async')
  , util      = require ('util')
  , expect = require ('chai').expect
  , _         = require ('underscore')
  , lib       = require ('@onehilltech/blueprint/lib')
  , testing   = lib.testing
  ;

describe ("MongoDB Test", function () {
  var user;

  describe("/users", function () {
    describe ("POST", function () {
      it ("it should create a user", function (done) {
        var dob = new Date().toISOString();
	var data = {
	  user: {
	    first_name: "Cory", last_name: "Lehnert", email: "corylehnert@no-replay.com", 
	    birthday: dob, phone_number: "123-456-7890", gender: "Male",
	    cars: [{
		carMake: "Toyota",
		carModel: "Camry",
		carMiles: 132000
	          }],
	    _id: '0'
	  }
        };
       blueprint.testing.request()
        .post("/users")
        .send(data)
        .expect(200)
        .end (function (err, res) {
          if (err) return done (err);
          
          expect (res.headers).to.have.property('last-modified');
  
          user = res.body.user;
          data.user._id = user._id;
          data.user.
          
          expect (res.body.user).to.deep.equal (data.user);
          return done (null);
          }, done);
        });
      });
   });
});
