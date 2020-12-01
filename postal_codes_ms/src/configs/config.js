const dotenv = require('dotenv');

dotenv.config();

const { REDIS_HOST, REDIS_PORT, REDIS_CACHE_TIME } = process.env;

module.exports = {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_CACHE_TIME,
};
