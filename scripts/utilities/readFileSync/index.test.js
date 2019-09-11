const { readFileSync } = require('fs');
const syncedReadFile = require('.');

jest.mock('fs', () => ({
  existsSync: jest.fn(() => true),
  readFileSync: jest.fn(() => ''),
}));

// Change this path to one that exists should it cease to exist
const MOCK_FILE_PATH = '/psammead/packages/components/psammead-image/';

describe('readFileSync', () => {
  syncedReadFile(MOCK_FILE_PATH);

  const [[filePath, encoding]] = readFileSync.mock.calls;

  it('should call readFile with the correct file path', async () => {
    expect(filePath).toEqual(MOCK_FILE_PATH);
  });

  it('should call readFile with utf8 encoding', async () => {
    expect(encoding).toEqual('utf8');
  });
});
