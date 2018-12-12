/* eslint-disable global-require */
/* eslint-disable no-console */
const stripAnsi = require('strip-ansi');

const getSuccessfulRequestMock = () => {
  jest.mock('request', () => jest.fn());

  return require('request');
};

const getFailingRequestMock = () => {
  jest.mock('request', () => jest.fn((options, err) => err('Error Message')));

  return require('request');
};

const getOptions = (slackToken, message, colour) => ({
  body: JSON.stringify({
    attachments: [
      {
        fallback: message,
        color: colour,
        text: message,
      },
    ],
  }),
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  url: `https://hooks.slack.com/services/${slackToken}`,
});

describe(`Publish Script - slackNotification`, () => {
  beforeEach(() => {
    jest.resetModules();

    delete process.env.SLACK_TOKEN;
  });

  it('sends correct slack request for success', () => {
    const request = getSuccessfulRequestMock();

    process.env.SLACK_TOKEN = '1234';

    const slackNotification = require('../src/slackNotification');

    slackNotification('@foo/psammead-foobar', true);

    expect(request).toHaveBeenCalledWith(
      getOptions(
        '1234',
        '@foo/psammead-foobar has been published successfully!',
        '#36a64f',
      ),
      expect.any(Function),
    );
  });

  it('sends correct slack request for failure', () => {
    const request = getSuccessfulRequestMock();

    process.env.SLACK_TOKEN = '1234';

    const slackNotification = require('../src/slackNotification');

    slackNotification('@foo/psammead-foobar', false);

    expect(request).toHaveBeenCalledWith(
      getOptions('1234', '@foo/psammead-foobar failed to publish', '#c30e0e'),
      expect.any(Function),
    );
  });

  it('logs correct console log when request errors', () => {
    getFailingRequestMock();
    console.log = jest.fn();

    process.env.SLACK_TOKEN = '1234';

    const slackNotification = require('../src/slackNotification');

    slackNotification('@foo/psammead-foobar', false);

    expect(stripAnsi(console.log.mock.calls[0][0])).toEqual(
      expect.stringContaining('Error! Unable to publish slack notification'),
    );
  });

  it('logs correct console log when slack token is not provided', () => {
    console.log = jest.fn();

    const slackNotification = require('../src/slackNotification');

    slackNotification('@foo/psammead-foobar', false);

    expect(stripAnsi(console.log.mock.calls[0][0])).toEqual(
      expect.stringContaining(
        'Error! Slack token not provided! Please ensure environment variable SLACK_TOKEN is present',
      ),
    );
  });
});
