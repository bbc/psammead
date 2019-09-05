const shell = require('shelljs');
const fsActions = require('./index');

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}));

describe('File system actions', () => {
  it('should successfully npm install', () => {
    shell.exec.mockReturnValue({ code: 0, output: 'success' });

    expect(fsActions.install()).toEqual(Promise.resolve('success'));
  });

  it('should unsuccessfully npm install', () => {
    shell.exec.mockReturnValue({ code: 99, output: 'error' });

    expect(fsActions.install()).toEqual(Promise.reject('error'));
  });
});
