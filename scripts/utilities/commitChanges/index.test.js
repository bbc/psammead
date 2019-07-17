const commitChanges = require('.');

jest.mock('child_process', () => ({ execSync: jest.fn() }));
// eslint-disable-next-line import/order
const { execSync } = require('child_process');

describe('commitChanges', () => {
  commitChanges('Some commit message');

  const [[gitCommand, options]] = execSync.mock.calls;

  it('should call git commit changes with correct message', () => {
    expect(gitCommand).toEqual("git commit -m 'Some commit message'");
  });

  it('should have project root as the current working directory', () => {
    commitChanges('Some commit message');

    expect(options.cwd).toMatch(/\/psammead$/);
  });
});
