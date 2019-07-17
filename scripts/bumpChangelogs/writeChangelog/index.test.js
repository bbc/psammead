const { writeFile } = require('fs');
const writeChangelog = require('.');

jest.mock('fs', () => ({
  writeFile: jest.fn(),
}));

describe('readFile', () => {
  it('should call writeFile with correct file path and content', async () => {
    writeChangelog('/psammead/packages/components/psammead-brand')(
      'mock content',
    );
    const [[filePath, content]] = writeFile.mock.calls;

    expect(filePath).toEqual('/psammead/packages/components/psammead-brand');
    expect(content).toEqual('mock content');
  });
});
