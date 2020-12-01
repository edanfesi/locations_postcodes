const assert = require('assert');

const { REDIS_HOST, REDIS_PORT, REDIS_CACHE_TIME } = require('./config');

assert(REDIS_HOST, 'REDIS_HOST must be provided');
assert(REDIS_PORT, 'REDIS_PORT must be provided');

module.exports = {
  redisConfig: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    expirationTime: REDIS_CACHE_TIME || 1800,
  },
};
