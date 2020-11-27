const knex = require('knex');
const { databaseConfig } = require('../config/database');

const DB = knex(databaseConfig);

const insertOrUpdate = (dbKnex, tableName, data, conflictingColumns) => {
  const insertString = dbKnex(tableName).insert(data).toString().replace(/\?/g, '\\?');

  const conflictingColumnsString = conflictingColumns.join(', ');

  return dbKnex.raw(`${insertString} ON CONFLICT (${conflictingColumnsString}) DO NOTHING`);
};

module.exports = {
  DB, insertOrUpdate,
};
