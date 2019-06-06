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

describe('fonts', () => {
  describe('getSansRegular', () => {
    it('should return regular sans font css', () => {
      expect(fontStyles.getSansRegular('igbo')).toMatchSnapshot();
    });

    it('should fail gracefully given an invalid service name', () => {
      expect(fontStyles.getSansRegular('default')).toBeUndefined();
    });
  });

  describe('getSansItalic', () => {
    it('should return regular sans italic font css', () => {
      expect(fontStyles.getSansItalic('yoruba')).toMatchSnapshot();
    });
  });

  describe('getSansBold', () => {
    it('should return bold sans font css', () => {
      expect(fontStyles.getSansBold('pidgin')).toMatchSnapshot();
    });
  });

  describe('getSansBoldItalic', () => {
    it('should return bold italic font css', () => {
      expect(fontStyles.getSansBoldItalic('igbo')).toMatchSnapshot();
    });
  });

  describe('getSerifMedium', () => {
    it('should return medium serif font css', () => {
      expect(fontStyles.getSerifMedium('news')).toMatchSnapshot();
    });
    it('should return regular sans bold font css for sevices without serif medium', () => {
      expect(fontStyles.getSerifMedium('igbo')).toMatchSnapshot();
    });
  });

  describe('getSerifMediumItalic', () => {
    it('should return serif medium italic font css', () => {
      expect(fontStyles.getSerifMedium('news')).toMatchSnapshot();
    });
    it('should return sans bold italic font css for sevice without serif medium italic', () => {
      expect(fontStyles.getSerifMediumItalic('yoruba')).toMatchSnapshot();
    });
  });
});
