const redis = require('redis');

const { REDIS_HOST, REDIS_PORT } = require('../configs/Redis');

const Redis = redis.createClient(REDIS_HOST, REDIS_PORT);

module.exports = {
  Redis,
};
