jest.mock('../fs-actions');
import { mkDir, install } from '../fs-actions';
mkDir.mockImplementation(test => test);
install.mockReturnValue(() => 'cheese');

describe('file system helper tests', () => {
  it('calls mkdir', () => {
    expect(mkDir('hullaballoo')).toEqual('test');
  });
  it('calls install', () => {
    expect(install()).toEqual('cheese');
  });
});
