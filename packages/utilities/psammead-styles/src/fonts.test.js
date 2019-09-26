// Test to verify functionality of overriding base font URL

import * as fonts from './fonts';

Object.values(fonts).forEach(font => {
  const newUrl = 'https://example.com/';
  const fontName = font.name
    .replace(/_/g, ' ') // Replace all _ with spaces
    .substring(2);

  it(`should match ${fontName} base font url`, () => {
    expect(font()).toMatchSnapshot();
  });

  it(`should match the overridden url: ${newUrl}`, () => {
    expect(font(newUrl)).toMatchSnapshot();
  });
});
