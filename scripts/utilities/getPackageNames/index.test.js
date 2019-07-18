const getPackageNames = require('.');

jest.mock('shelljs', () => ({
  exec: () => ({
    stdout: `
  @bbc/psammead-brand
  @bbc/psammead-image
`,
  }),
}));

describe('getPackageNames', () => {
  it('should return package names without the "@bbc" scope', () => {
    const actual = getPackageNames();
    const expected = ['psammead-brand', 'psammead-image'];
    expect(actual).toEqual(expected);
  });
});
