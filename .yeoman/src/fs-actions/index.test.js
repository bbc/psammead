const shell = require('shelljs');
const fsActions = require('./index');

jest.mock('shelljs', () => ({
  exec: jest.fn(() => ({ code: 0 })),
}));

describe('file system helper tests', () => {
  it('calls install', () => {
    expect(fsActions.install('test')).resolves.toEqual(undefined);
  });

  it('calls installPackage', () => {
    expect(fsActions.installPackage('test')).resolves.toEqual(undefined);
  });
});
