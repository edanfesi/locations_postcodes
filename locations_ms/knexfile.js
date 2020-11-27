const assert = require('assert');
const { DB_CONNECTION: connection } = require('./src/config/database');

assert(connection, 'DB_CONNECTION must be provided');

const maxConnectionPoolSize = parseInt(process.env.CONNECTION_POOL_SIZE, 10) || 10;
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
