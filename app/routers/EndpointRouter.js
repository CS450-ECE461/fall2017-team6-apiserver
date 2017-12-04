// app/routers/EndpointRouter.js
const cors = require('cors');

module.exports = exports = {
  '/v1': cors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: '*',
  }),
};
