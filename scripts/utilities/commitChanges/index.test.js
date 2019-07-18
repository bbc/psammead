const { execSync } = require('child_process');
const commitChanges = require('.');

jest.mock('child_process', () => ({ execSync: jest.fn() }));

describe('commitChanges', () => {
  commitChanges('Some commit message');

  const [[gitCommand]] = execSync.mock.calls;

  it('should call git commit changes with correct message', () => {
    expect(gitCommand).toEqual("git commit -m 'Some commit message'");
  });
});
