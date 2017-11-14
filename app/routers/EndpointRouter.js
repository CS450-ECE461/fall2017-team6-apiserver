// app/routers/EndpointRouter.js
const blueprint = require('@onehilltech/blueprint')
  ;

module.exports = exports = {
  '/gatekeeper': blueprint('router://@onehilltech/gatekeeper:v1'),
  '/v1': {
    policy: 'gatekeeper.auth.bearer',
  },
};
