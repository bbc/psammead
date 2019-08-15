const shell = require('shelljs');
const fsActions = require('./index');

jest.mock('shelljs', () => ({
  mkdir: jest.fn(),
  exec: jest.fn(),
}));

console.log(fsActions.mkDir);

console.log(fsActions.mkDir());
describe('file system helper tests', () => {
  it('calls mkdir', () => {
    shell.mkdir.mockReturnValue = 'hullaballo';
    expect(fsActions.mkDir()).toEqual('test');
  });
  //   it('calls install', () => {
  //     expect(fsActions.install('lol')).resolves.toEqual('cheese');
  //   });
});
