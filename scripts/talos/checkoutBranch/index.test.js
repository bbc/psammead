import checkoutBranch from '.';
import runExec from '../../utilities/runExec';

jest.mock('../../utilities/runExec', () => jest.fn());
runExec.mockImplementation(() => Promise.resolve('success'));

describe('checkoutBranch', () => {
  it('should call runExec correctly', async () => {
    await checkoutBranch('foobar');

    expect(runExec).toHaveBeenCalledTimes(1);
    expect(runExec).toHaveBeenCalledWith({ command: 'git checkout -b foobar' });
  });

  it('should should not catch its own errors', async () => {
    runExec.mockImplementation(() =>
      Promise.reject(new Error('something bad happened')),
    );

    await checkoutBranch('foobar').catch(e => {
      expect(e.message).toEqual('something bad happened');
    });
  });
});
