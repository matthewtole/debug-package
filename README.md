# debug-package

Node.js module to automatically use the package name as the top level debug scope

## Usage

If your package name is `awesome-package`, the following code will log messages under the debug scope of `awesome-package:server`.

```
const debug = require('debug-package')('server');
debug('Test debug message!');
```
