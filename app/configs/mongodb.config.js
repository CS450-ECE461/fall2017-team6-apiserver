'use strict';

const blueprint = require('@onehilltech/blueprint')
  ;

module.exports = {
  connections: {
    $default: {
      connstr: 'mongodb://alexhicks.net/team-6_' + blueprint.env,

      options: {
        db: {
          native_parser: true,
          read_preference: 'primary',
          forceServerObjectId: false,
          w: 1,
        },
        server: {
          auto_reconnect: true,
          keepAlive: 1,
          poolSize: 5,
          socketOptions: {},
        },
      },
    },
  },
};
