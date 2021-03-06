const LocationsService = module.exports;

const fs = require('fs');
const csv = require('csv-parser');

const LocationsRepository = require('../repositories/LocationsRepository');
const LocationsEventsProducer = require('../producers/LocationsEventsProducer');

LocationsService.upload = async (file, options = {}) => {
  const logName = 'LocationsService.upload';
  const { logger = console } = options;

  logger.info(logName, 'Starts uploading file to the database');

  const dataToInsert = [];

  return fs.createReadStream(file.path, 'utf8')
    .pipe(csv())
    .on('data', (row) => {
      dataToInsert.push({ lat: parseFloat(row.lat), lng: parseFloat(row.lon) });
    })
    .on('end', async () => {
      logger.info(logName, 'CSV file successfully processed');

      await LocationsRepository.upsert(dataToInsert);

      return LocationsEventsProducer.sendMessage(dataToInsert);
    });
};
