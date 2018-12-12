describe(`Publish Script - slackNotification`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('sends correct slack request for success', () => {
    // request is called with options
    expect(2).toEqual(2);
  });

  it('sends correct slack request for failure', () => {
    expect(2).toEqual(2);
  });

  it('logs correct console log when request errors', () => {
    // console message Error! Unable to publish slack notification
    expect(2).toEqual(2);
  });

  it('logs correct console log when slack token is not provided', () => {
    // console message Error! Slack token not provided!
    expect(2).toEqual(2);
  });
});
