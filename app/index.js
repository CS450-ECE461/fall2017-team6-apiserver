#!/usr/bin/env node

const blueprint = require('@onehilltech/blueprint');
const winston = require('winston');

blueprint.createApplicationAndStart(__dirname, function(err) {
  if (err) {
    winston.log('error', err);
  }

  winston.log('info', 'application started...');
});
