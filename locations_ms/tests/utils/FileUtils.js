const FileUtils = module.exports;

const fs = require('fs');

FileUtils.readFile = (route) => {
  let file;

  try {
    file = fs.readFileSync(route, 'utf8');
  } catch (err) {
    console.error(err);
  }

  return file;
};
