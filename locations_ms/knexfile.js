const assert = require('assert');
const { DB_CONNECTION: connection, maxConnectionPoolSize } = require('./src/config/config');

assert(connection, 'DB_CONNECTION must be provided');

const timeout = 30000;

module.exports = {
  client: 'pg',
  connection,
  pool: {
    min: 1,
    max: maxConnectionPoolSize,
    idleTimeoutMillis: timeout,
    createTimeoutMillis: timeout,
    acquireTimeoutMillis: timeout,
  },
  acquireConnectionTimeout: timeout,
  connectionTimeout: timeout,
  migration: {
    directory: './migrations',
    tableName: 'migrations',
  },
};
