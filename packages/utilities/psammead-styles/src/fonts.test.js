// Test to verify functionality of overriding base font URL

import * as fonts from './fonts';

const fontNames = Object.values(fonts);

fontNames.forEach(font => {
  it(`should match base font url`, () => {
    expect(font()).toMatchSnapshot();
  });

  it('should match the overridden url', () => {
    expect(font('https://example.com/')).toMatchSnapshot();
  });
});
