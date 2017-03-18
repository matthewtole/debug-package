const path = require('path');

const packageInfo = require(path.join(process.cwd(), 'package.json'));
module.exports = tag => require('debug')(`${packageInfo.name}:${tag}`);
