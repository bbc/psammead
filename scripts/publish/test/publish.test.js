/* eslint-disable global-require */
/* eslint-disable no-console */
const stripAnsi = require('strip-ansi');

const getSuccessfulShellJsMock = () => {
  jest.mock('shelljs', () => ({
    exec: jest.fn(() => ({ code: 0 })),
  }));

  return require('shelljs');
};

const getFailingShellJsMock = () => {
  jest.mock('shelljs', () => ({
    exec: jest.fn(() => ({ code: 1 })),
  }));

  return require('shelljs');
};

const getSlackNotificationMock = () => {
  jest.mock('../src/slackNotification');
  return require('../src/slackNotification');
};

const packageJson = {
  name: '@foo/psammead-foobar',
  version: '0.1.2',
};

let attempted = {};

describe(`Publish Script - publish`, () => {
  beforeEach(() => {
    jest.resetModules();

    console.log = jest.fn();

    process.argv = process.argv.filter(v => !v.includes('--otp'));

    attempted = {
      success: [],
      failure: [],
    };
  });

  it('runs correct publish command and publish is successful ', () => {
    const shelljs = getSuccessfulShellJsMock();
    const slackNotification = getSlackNotificationMock();
    const publish = require('../src/publish');

    publish('/foo/bar', packageJson, attempted);

    expect(shelljs.exec).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );

    const expectedOutput = [
      'Publishing @foo/psammead-foobar',
      'Successfully published @foo/psammead-foobar',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(attempted.success.length).toEqual(1);
    expect(attempted.success[0]).toEqual('@foo/psammead-foobar@0.1.2');

    expect(slackNotification).toHaveBeenCalledWith(
      '@foo/psammead-foobar@0.1.2',
      true,
    );
  });

  it('runs correct publish command and publish is unsuccessful ', () => {
    const shelljs = getFailingShellJsMock();
    const slackNotification = getSlackNotificationMock();
    const publish = require('../src/publish');

    publish('/foo/bar', packageJson, attempted);

    expect(shelljs.exec).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );

    const expectedOutput = [
      'Publishing @foo/psammead-foobar',
      'Error publishing @foo/psammead-foobar@0.1.2',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(attempted.failure.length).toEqual(1);
    expect(attempted.failure[0]).toEqual('@foo/psammead-foobar@0.1.2');

    expect(slackNotification).toHaveBeenCalledWith(
      '@foo/psammead-foobar@0.1.2',
      false,
    );
  });

  it('runs correct publish command when opt argument is set and publish is successful', () => {
    const shelljs = getFailingShellJsMock();

    process.argv.push('--otp=123456');

    const publish = require('../src/publish');

    publish('/foo/bar', packageJson, attempted);

    expect(shelljs.exec).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest --otp 123456',
      { silent: true },
    );
  });
});
