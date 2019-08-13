const { exec } = require('child_process');
const runExec = require('.');

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

describe('runExec', () => {
  beforeAll(() => {
    global.console.log = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('resolves promise when exec calls callback with no error', async () => {
    exec.mockImplementation((cmd, options, callback) => callback());

    expect(runExec({ command: 'foobar', dir: 'barfoo' })).resolves.toBe();
    expect(exec).toHaveBeenCalledWith(
      'foobar',
      { cwd: 'barfoo' },
      expect.any(Function),
    );
    expect(global.console.log).toHaveBeenCalledWith(
      '* Running "foobar" in dir "barfoo"',
    );
  });

  it('rejects promise when exec calls callback with an error', async () => {
    exec.mockImplementation((cmd, options, callback) =>
      callback('oh no an error'),
    );

    expect(runExec({ command: 'foobar', dir: 'barfoo' })).rejects.toMatch(
      'oh no an error',
    );
  });

  it('calls exec with empty object when no dir passed', async () => {
    exec.mockImplementation((cmd, options, callback) => callback());

    expect(runExec({ command: 'foobar' })).resolves.toBe();
    expect(exec).toHaveBeenCalledWith('foobar', {}, expect.any(Function));
    expect(global.console.log).toHaveBeenCalledWith('* Running "foobar"');
  });
});
