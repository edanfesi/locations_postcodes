const LocationsRepository = module.exports;

const { LOCATIONS } = require('./TableNames');
const { DB: db, insertOrUpdate } = require('../utils/DB');

LocationsRepository.upsert = (data) => insertOrUpdate(db, LOCATIONS, data, ['lat', 'lng']);
