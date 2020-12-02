const DBHelper = module.exports;

const { LOCATIONS } = require('../../src/repositories/TableNames');
const { DB } = require('../../src/utils/DB');

DBHelper.clear = async () => {
  await DB(LOCATIONS).del();
};
