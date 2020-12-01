const { MongoClient } = require('mongodb');

const { MONGO_HOST, MONGO_PORT } = require('./config');

const DB_NAME = 'postal-codes';
const URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

const client = new MongoClient(URL);

module.exports = async () => {
  await client.connect();

  return client.db(DB_NAME);
};
