import commitChanges from '.';
import runExec from '../../utilities/runExec';

jest.mock('../../utilities/runExec', () => jest.fn());
runExec.mockImplementation(() => Promise.resolve('success'));

describe('commitChanges', () => {
  it('should call runExec correctly', async () => {
    await commitChanges('commit message');

    expect(runExec).toHaveBeenCalledTimes(3);
    expect(runExec).toHaveBeenCalledWith({
      command: 'git add package.json yarn.lock CHANGELOG.md packages',
    });
    expect(runExec).toHaveBeenCalledWith({
      command: 'git commit -m "commit message"',
    });
    expect(runExec).toHaveBeenCalledWith({ command: 'git push origin HEAD' });
  });

  it('should not catch its own errors', async () => {
    runExec.mockImplementation(() =>
      Promise.reject(new Error('something bad happened')),
    );

    await commitChanges('commit message').catch(e => {
      expect(e.message).toEqual('something bad happened');
    });
  });
});
