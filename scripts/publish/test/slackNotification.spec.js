/* eslint-disable global-require */
describe(`Publish Script - slackNotification`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  //NOT DONE YET

  it('returns registry version with newline in response', () => {
    const requestMock = jest.fn();
    jest.mock('request');

    const slackNotification = require('../src/slackNotification');

    process.env.SLACK_TOKEN = '1.2.3.4';

    slackNotification('@foo/bar-package', true);

    expect(requestMock).toBeCalledWith('');
  });

  
});
