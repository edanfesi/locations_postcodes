const LocationsController = module.exports;

const createError = require('http-errors');
const { FILE_CSV_TYPE } = require('../constants/GeneralConstants');

const LocationsService = require('../services/LocationsServices');

/**
 * @api {post} /api/locations-ms/upload
 * @apiName Upload new locations
 * @apiDescription Endpoint to add new locations to the locations database
 *                 and send a kafka message with the added locations.
 *
 * @apiGroup locations
 * @apiParam (body) {file} csv with new locations
 *
 * @apiSuccess (204) {Object} message to indicate the file is uploading
 * @apiError (500) {Object} Internal Server Error
 */
LocationsController.upload = (req, res) => {
  const logName = 'LocationsController.upload';
  const logger = req.log || console;

  const { file } = req;

  logger.info(logName, `Starts with file ${file ? file.originalname : file}`);

  if (!file) {
    throw createError(400, 'Locations file missing');
  }

  if (file.mimetype !== FILE_CSV_TYPE) {
    throw createError(400, `Locations file has to be ${FILE_CSV_TYPE} and not ${file.mimetype}`);
  }

  LocationsService.upload(file, { logger })
    .catch((error) => {
      logger.error(logName, `Upload file ${file.originalname} with error ${error}`);
    });

  return res.send({ message: 'The file is being processed' });
};
