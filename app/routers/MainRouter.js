module.exports = exports = {
  '/dashboard': { // should get the account
    resource: {
      controller: 'AccountController',
    },
  },

  '/create': {
    resource: {
      controller: 'AccountController',
    },
  },

  '/mechanic': {
   resource: {
     controller: 'MechanicController',
    },
  },
};
