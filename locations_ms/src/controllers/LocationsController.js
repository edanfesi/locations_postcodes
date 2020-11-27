const LocationsController = module.exports;

const createError = require('http-errors');

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
LocationsController.upload = (req, res, next) => {
  const logName = 'LocationsController.upload';
  const logger = req.log || console.log;

  const { file } = req;

  logger(logName, `Starts with file ${file ? file.originalname : file}`);

  if (!file) throw createError(400, 'Locations file missing');

  return LocationsService.upload(file, { logger })
    .then(() => res.status(204).send('Uploading file'))
    .catch(next);
};
