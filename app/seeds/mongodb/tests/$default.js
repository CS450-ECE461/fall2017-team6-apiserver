'use strict';

const dab = require ('@onehilltech/dab')
  ;

module.exports = {
  user: dab.times(3, (i, opts, callback) => {
    let user = {
      first_name: 'User',
      last_name: 'Test${i}',
      email: 'user${i}@no-reply.com',
      birthday: new Date().toISOString(),
      phoneNumber: '123-456-7890',
      gender: 'Male',
      carMake: 'Toyota',
      carModel: 'Camry',
      carMiles: 123453,
      _id: '${i}'
    }
  }
  return (callback(null, user));
}
