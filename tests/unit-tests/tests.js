'use strict';

const blueprint = require('@onehilltech/blueprint');
const expect = require('chai').expect;

describe('MongoDB Test', function() {
  let user;

  describe('/users', function() {
    describe('POST', function() {
      it('it should create a user', function(done) {
        let data = {
          user: {
            first_name: 'Cory',
            last_name: 'Lehnert',
            email: 'corylehnert@no-replay.com',
            birthday: new Date().toISOString(),
            phone_number: '123-456-7890',
            gender: 'Male',
            cars: [{
              carMake: 'Toyota',
              carModel: 'Camry',
              carMiles: 132000,
            }],
            _id: '0',
          },
        };
        blueprint.testing.request()
          .post('/users')
          .send(data)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.headers).to.have.property('last-modified');
            user = res.body.user;
            data.user._id = user._id;
            data.user.expect(res.body.user).to.deep.equal(data.user);
            return done(null);
          }, done);
        });
      });
   });
});
