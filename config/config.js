'use strict';

const env = process.env.NODE_ENV || 'default';
module.exports = require(`./env/${env}`);
