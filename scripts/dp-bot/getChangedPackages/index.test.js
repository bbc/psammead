import * as fs from 'fs';
import getChangedPackages from '.';

const originalProcessArgv = process.argv;

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

describe('getChangedPackages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fs.existsSync.mockImplementation(() => true);
    fs.readFileSync.mockImplementation(() => '@bbc/apples,@bbc/pears,');
    process.argv = ['/User/bob/thin/node', 'file.js'];
  });

  afterEach(() => {
    process.argv = originalProcessArgv;
  });

  it('should return an array of packages', async () => {
    const packages = getChangedPackages();

    expect(packages).toEqual(['@bbc/apples', '@bbc/pears']);
    expect(fs.readFileSync).toHaveBeenCalledWith('published.txt', 'utf8');
  });

  it('should remove duplicates', async () => {
    fs.readFileSync.mockImplementation(
      () => '@bbc/apples,@bbc/pears,@bbc/apples,',
    );

    const packages = getChangedPackages();

    expect(packages).toEqual(['@bbc/apples', '@bbc/pears']);
  });

  it('should return an empty array if the file is empty', async () => {
    fs.readFileSync.mockImplementation(() => '');

    const packages = getChangedPackages();

    expect(packages).toEqual([]);
  });

  it("should return an empty array if file doesn't exist", async () => {
    fs.existsSync.mockImplementation(() => false);

    const packages = getChangedPackages();

    expect(packages).toEqual([]);

    expect(fs.readFileSync).not.toHaveBeenCalled();
  });

  it('should return an array of packages from argument when provided', async () => {
    process.argv.push('@bbc/pie,@bbc/cake,');

    const packages = getChangedPackages();

    expect(packages).toEqual(['@bbc/pie', '@bbc/cake']);
    expect(fs.readFileSync).not.toHaveBeenCalled();
  });

  it('should return an array of packages from file when argument is empty string', async () => {
    process.argv.push('');

    const packages = getChangedPackages();

    expect(packages).toEqual(['@bbc/apples', '@bbc/pears']);
    expect(fs.readFileSync).toHaveBeenCalledWith('published.txt', 'utf8');
  });
});
