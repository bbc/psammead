const getPackages = require('.');

jest.mock('shelljs', () => ({
  exec: () => ({
    stdout: `
/psammead/packages/components/psammead-brand
/psammead/packages/components/psammead-image
`,
  }),
}));

describe('getPackages', () => {
  it("should return array of all package's paths", () => {
    const actual = getPackages();
    const expected = [
      '/psammead/packages/components/psammead-brand',
      '/psammead/packages/components/psammead-image',
    ];
    expect(actual).toEqual(expected);
  });
});
