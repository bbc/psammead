import * as fs from 'fs';
import getChangedPackages from '.';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

fs.existsSync.mockImplementation(() => true);
fs.readFileSync.mockImplementation(() => '@bbc/apples,@bbc/pears,');

describe('getChangedPackages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of packages', async () => {
    const packages = getChangedPackages();

    expect(packages).toEqual(['@bbc/apples', '@bbc/pears']);
    expect(fs.readFileSync).toHaveBeenCalledWith('published.txt');
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

  it('should return an empty array if file doesn't exist', async () => {
    fs.existsSync.mockImplementation(() => false);

    const packages = getChangedPackages();

    expect(packages).toEqual([]);

    expect(fs.readFileSync).not.toHaveBeenCalled();
  });
});
