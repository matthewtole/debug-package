const path = require('path');

const packageInfo = require(path.join(process.cwd(), 'package.json'));

module.exports = (tag) => {
  if (tag) {
    return require('debug')(`${packageInfo.name}:${tag}`);
  }
  return require('debug')(packageInfo.name);
};
