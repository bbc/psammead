describe(`Publish Script - publish`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('runs correct publish command and publish is successful ', () => {
    // Exec is called with expected command
    // Console log 'Successfully published ${packageReleaseTag}'
    // attempted.success has 1 more value
    // slackNotification is called with tag and true
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
