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

readFileSync.mockImplementation(() =>
  JSON.stringify({
    version: '1.0.0',
  }),
);

beforeEach(() => {
  jest.clearAllMocks();

  readFileSync.mockImplementation(() =>
    JSON.stringify({
      version: '1.0.0',
    }),
  );
});

describe('bumpPackages', () => {
  it('should bump alpha versions correctly', async () => {
    readFileSync.mockImplementation(() =>
      JSON.stringify({
        version: '1.0.1-alpha.4',
      }),
    );
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      version: 'minor',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version prerelease');
  });

  it('should bump patch versions correctly', async () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      version: 'patch',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version patch');
  });

  it('should bump minor versions correctly', async () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      version: 'minor',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version minor');
  });

  it('should bump major versions correctly', async () => {
    bumpPackages({
      packageNames: ['@bbc/psammead-test-package-1'],
      version: 'major',
    });

    const [[command, options]] = execSync.mock.calls;

    expect(execSync).toHaveBeenCalledTimes(1);
    expect(options).toEqual({ cwd: '/psammead-test-package-1' });
    expect(command).toBe('yarn version major');
  });

  it('should bump mulitple packages correctly', async () => {
    bumpPackages({
      packageNames: [
        '@bbc/psammead-test-package-1',
        '@bbc/psammead-test-package-2',
        '@bbc/psammead-test-package-3',
      ],
      version: 'major',
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
