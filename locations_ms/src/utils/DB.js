const knex = require('knex');
const { databaseConfig } = require('../config/database');

const DB = knex(databaseConfig);

module.exports = {
  DB,
};
