const blueprint = require('@onehilltech/blueprint');
const cors = require('cors');
// require('@onehilltech/blueprint-gatekeeper');

module.exports = exports = {
  '/gatekeeper': [
    cors(),
    blueprint('router://@onehilltech/gatekeeper:v1'),
  ],

  // '/v1': {
  //   policy: 'gatekeeper.auth.bearer',
  // },

  '/mechanic': { // for accessing the mechanic's info page
    resource: {
      controller: 'MechanicController',
    },
  },

  '/diagnostic': { // for accessing diagnostic requests
    resource: {
      controller: 'DiagnosticController',
    },
  },
};
