import * as fontStyles from './font-styles';
import * as fontFamilies from './font-families';

const services = Object.keys(fontFamilies);

services.forEach(service => {
  Object.keys(fontStyles).forEach(fontStyle => {
    const style = fontStyle.replace('get', '');
    it(`should render ${style} correctly for ${service}`, () => {
      expect(fontStyles[fontStyle](service)).toMatchSnapshot();
    });
  });
});
