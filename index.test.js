const debugPackage = require('.');

describe('debug-package', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should log using the package name as a prefix', () => {
    const debug = debugPackage();
    debug.enabled = true;
    debug.log = jest.fn();
    debug('Test');
    expect(debug.log).toHaveBeenCalledWith(
      expect.stringContaining('debug-package '),
      expect.anything()
    );
  });

  it('should use the additional prefix if passed', () => {
    const debug = debugPackage('test');
    debug.enabled = true;
    debug.log = jest.fn();
    debug('Test');
    expect(debug.log).toHaveBeenCalledWith(
      expect.stringContaining('debug-package:test '),
      expect.anything()
    );
  });
});
