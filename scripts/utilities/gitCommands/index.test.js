const { execSync } = require('child_process');
const { gitAdd, gitCommit } = require('.');

jest.mock('child_process', () => ({ execSync: jest.fn() }));

describe('gitAdd', () => {
  it('should stage the file', async () => {
    stageFile('/psammead/packages/components/psammead-brand');
    const [[command]] = execSync.mock.calls;

    expect(command).toEqual(
      'git add /psammead/packages/components/psammead-brand',
    );
  });
});

describe('gitCommit', () => {
  commitChanges('Some commit message');

  const [[gitCommand]] = execSync.mock.calls;

  it('should call git commit changes with correct message', () => {
    expect(gitCommand).toEqual("git commit -m 'Some commit message'");
  });
});

// To be completed
