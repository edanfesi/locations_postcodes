const { LOCATIONS } = require('../src/repositories/TableNames');

exports.up = (knex) => knex.schema.createTable(LOCATIONS, (table) => {
  table.bigIncrements('id').primary();
  table.double('lat').notNullable();
  table.double('lng').notNullable();
  table.timestamps(true, true);
  table.unique(['lat', 'lng']);
});

exports.down = (knex) => knex.schema.dropTable(LOCATIONS);
