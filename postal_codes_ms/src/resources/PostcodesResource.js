const PostcodesResource = module.exports;

const BASE_POSTCODES_URL = 'https://postcodes.io/postcodes';

PostcodesResource.getPostcodesByLocation = (lat, lng, options) => {
  const section = 'PostcodesResource.getPostcodesByLocation';

  const { logger = console } = options;

  logger.info(section, `starts with lat ${lat} y lng ${lng}`);

  const URL = `${BASE_POSTCODES_URL}?lon=${lng}&lat=${lat}`;

  const conf = {
    method: 'GET',
    json: true,
  };

  return fetch(URL, conf).then()((response) => {
    logger.debug(section, `Response got ${JSON.stringify(response)}`);

    return response;
  }).catch((error) => {
    logger.error(section, `Response error_ ${error.message || JSON.stringify(error)}`);

    return null;
  });
};
