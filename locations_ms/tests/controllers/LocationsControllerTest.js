const chai = require('chai');
const assert = require('assert');
const chaiHttp = require('chai-http');
const { readFileSync } = require('fs');

const app = require('../../index');
const LocationsRepository = require('../../src/repositories/LocationsRepository');
const DBHelper = require('../helpers/DBHelper');

const API_PATH = '/api/locations-ms';
const FILE_DIR = `${__dirname}/../data/csvData`;

chai.use(chaiHttp);

describe('LocationsController Test', () => {
  beforeEach(async () => {
    await DBHelper.clear();
  });

  it('should upload a file', async () => {
    const fileLocation = `${FILE_DIR}/postcodesgeo.csv`;

    const {
      statusCode,
      body: {
        message,
      },
    } = await chai.request(app)
      .post(`${API_PATH}/upload`)
      .attach('file', readFileSync(fileLocation), 'postcodesgeo.csv');

    assert(statusCode, 200);
    assert(message, 'The file is being processed');
  });

  it('should fail if the request does not have a file', async () => {
    await chai.request(app)
      .post(`${API_PATH}/upload`)
      .catch(async (error) => {
        assert(error.statusCode, 400);
        assert(error.message, 'Locations file missing');

        const locationsSaved = await LocationsRepository.getLocations();

        assert(locationsSaved.length, 0);
      });
  });

  it('should fail if the request does have a file with different extention', async () => {
    const fileLocation = `${FILE_DIR}/postcodesgeo.txt`;

    await chai.request(app)
      .post(`${API_PATH}/upload`)
      .attach('file', readFileSync(fileLocation), 'postcodesgeo.txt')
      .catch(async (error) => {
        assert(error.statusCode, 400);
        assert(error.message, 'Locations file has to be text/csv and not text/plain');

        const locationsSaved = await LocationsRepository.getLocations();

        assert(locationsSaved.length, 0);
      });
  });
});
