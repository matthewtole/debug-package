# debug-package

[![npm](https://img.shields.io/npm/v/debug-package.svg?style=flat-square)](https://www.npmjs.com/package/debug-package) [![license](https://img.shields.io/github/license/matthewtole/debug-package.svg?style=flat-square)](./LICENCE)

Node.js module to automatically use the package name as the top level [debug](https://www.npmjs.com/package/debug) scope

## Installation

```
npm install --save debug-package
```

## Usage

If your package name is `awesome-package`, the following code will log messages under the debug scope of `awesome-package:server`.

```js
const debug = require('debug-package')('server');
debug('Test debug message!');
```
