/* eslint-disable global-require */
/* eslint-disable no-console */
const stripAnsi = require('strip-ansi');

describe(`Publish Script - publish`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('runs correct publish command and publish is successful ', () => {
    console.log = jest.fn();

    jest.mock('shelljs', () => ({
      exec: jest.fn(() => ({ code: 0 })),
    }));

    const shelljs = require('shelljs');

    jest.mock('../src/slackNotification');

    const slackNotification = require('../src/slackNotification');

    const publish = require('../src/publish');

    const packageJson = {
      name: '@foo/psammead-foobar',
      version: '0.1.2',
    };

    const attempted = {
      success: [],
      failure: [],
    };

    publish('/foo/bar', packageJson, attempted);

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

    expect(shelljs.exec).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );
  });

  it('runs correct publish command and publish is unsuccessful ', () => {
    // Exec is called with expected command
    // Console log 'Successfully published ${packageReleaseTag}'
    // attempted.success has 1 more value
    // slackNotification is called with tag and true
  });

  it('runs correct publish command when opt argument is set and publish is successful', () => {
    // Exec is called with expected command
    // Console log 'Error publishing ${packageReleaseTag}'
    // attempted.failure has 1 more value
    // slackNotification is called with tag and false
  });
});
