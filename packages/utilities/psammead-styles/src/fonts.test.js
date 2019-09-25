// Test to verify functionality of overriding base font URL

import * as fonts from './fonts';

const fontNames = Object.values(fonts);

fontNames.forEach(font => {
  //console.log(font.name);
  test = font().split('\n')[2]
  .replace('font-family:', '')
  .replace(/"/g, '')
  .replace(';', '')
  .replace(/\s/g, '');

  it(`should match ${test} base font url`, () => {
    expect(font()).toMatchSnapshot();
  });

  it('should match the overridden url', () => {
    expect(font('https://example.com/')).toMatchSnapshot();
  });
});
