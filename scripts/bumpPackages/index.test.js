/* eslint-disable no-console */
const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const bumpPackages = require('.');

jest.mock('../utilities/getPackages', () => () => [
  {
    name: '@bbc/psammead-test-package-1',
    location: '/psammead-test-package-1',
  },
  {
    name: '@bbc/psammead-test-package-2',
    location: '/psammead-test-package-2',
  },
  {
    name: '@bbc/psammead-test-package-3',
    location: '/psammead-test-package-3',
  },
]);

jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));

jest.mock('fs', () => ({
  readFileSync: jest.fn(),
}));

const { log } = console;

beforeEach(() => {
  jest.clearAllMocks();
  console.log = jest.fn();

  readFileSync.mockImplementation(() =>
    JSON.stringify({
      version: '1.0.0',
    }),
  );
});

afterEach(() => {
  console.log = log;
});

describe('bumpPackages', () => {
  it('should bump alpha versions correctly', () => {
    readFileSync.mockImplementation(() =>
      JSON.stringify({
        version: '1.0.1-alpha.4',
      }),
    );
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      strategy: 'minor',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version prerelease');
  });

  it('should bump patch versions correctly', () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      strategy: 'patch',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version patch');
  });

  it('should bump minor versions correctly', () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      strategy: 'minor',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version minor');
  });

  it('should bump major versions correctly', () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      strategy: 'major',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version major');
  });

  it('should bump mulitple packages correctly', () => {
    bumpPackages({
      packageNames: [
        '@bbc/psammead-test-package-1',
        '@bbc/psammead-test-package-2',
        '@bbc/psammead-test-package-3',
      ],
      strategy: 'major',
    });

    const { calls } = execSync.mock;

    expect(execSync).toHaveBeenCalledTimes(3);
    expect(calls[0][1]).toEqual({ cwd: '/psammead-test-package-1' });
    expect(calls[0][0]).toBe('yarn version major');
    expect(calls[1][1]).toEqual({ cwd: '/psammead-test-package-2' });
    expect(calls[1][0]).toBe('yarn version major');
    expect(calls[2][1]).toEqual({ cwd: '/psammead-test-package-3' });
    expect(calls[2][0]).toBe('yarn version major');
  });
});
