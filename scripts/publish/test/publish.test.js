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

const packageJson = { name: '@foo/psammead-foobar', version: '0.1.2' };

describe(`Publish Script - publish`, () => {
  beforeEach(() => {
    jest.resetModules();
    console.log = jest.fn();
  });

  it('runs correct publish command and publish is successful ', async () => {
    const shelljs = getSuccessfulShellJsMock();
    const slackNotification = getSlackNotificationMock();
    const publish = require('../src/publish');

    const result = await publish('/foo/bar', packageJson);

    expect(shelljs.exec).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );

    const expectedOutput = {
      packageReleaseTag: '@foo/psammead-foobar@0.1.2',
      status: true,
      failure: false,
    };

    expect(result).toEqual(expectedOutput);

    expect(slackNotification).toHaveBeenCalledWith(
      '@foo/psammead-foobar@0.1.2',
      true,
    );
  });

  it('runs correct publish command and publish is unsuccessful ', () => {
    const shelljs = getFailingShellJsMock();
    const slackNotification = getSlackNotificationMock();
    const publish = require('../src/publish');

    publish('/foo/bar', packageJson);

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

    expect(slackNotification).toHaveBeenCalledWith(
      '@foo/psammead-foobar@0.1.2',
      false,
    );
  });
});
