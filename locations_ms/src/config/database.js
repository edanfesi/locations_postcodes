const { DB_CONNECTION } = process.env;

const MAX_CONNECTION_POOL_SIZE = 15;
const CONNECTION_TIMEOUT = 30000;
const IDLE_TIMEOUT = 5000;
const IDLE_CHECK_TIME = 1000;

module.exports = {
  databaseConfig: {
    client: 'pg',
    connection: DB_CONNECTION,
    pool: {
      min: 1,
      max: MAX_CONNECTION_POOL_SIZE,
      idleTimeoutMillis: IDLE_TIMEOUT,
      reapIntervalMillis: IDLE_CHECK_TIME,
      createTimeoutMillis: CONNECTION_TIMEOUT,
      acquireTimeoutMillis: CONNECTION_TIMEOUT,
    },
    acquireConnectionTimeout: CONNECTION_TIMEOUT,
  },
};
