const { execSync } = require('child_process');
const stageFile = require('.');

jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));

describe('readFile', () => {
  it('should stage the file', async () => {
    stageFile('/psammead/packages/components/psammead-brand');
    const [[command]] = execSync.mock.calls;

    expect(command).toEqual(
      'git add /psammead/packages/components/psammead-brand',
    );
  });
});
