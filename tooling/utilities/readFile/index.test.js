const { readFile } = require('fs');
const promisifiedReadFile = require('.');

jest.mock('fs', () => ({
  readFile: jest.fn(),
}));

const MOCK_FILE_PATH = '/psammead/packages/components/psammead-image';

describe('readFile', () => {
  promisifiedReadFile(MOCK_FILE_PATH);

  const [[filePath, encoding]] = readFile.mock.calls;

  it('should call readFile with the correct file path', async () => {
    expect(filePath).toEqual(MOCK_FILE_PATH);
  });

  it('should call readFile with utf8 encoding', async () => {
    expect(encoding).toEqual('utf8');
  });
});
