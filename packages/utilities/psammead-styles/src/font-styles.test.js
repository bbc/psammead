import {
  getSansRegular,
  getSansItalic,
  getSansBold,
  getSansBoldItalic,
  getSerifMedium,
  getSerifMediumItalic,
} from './font-styles';

describe('fonts', () => {
  describe('getSansRegular', () => {
    it('should return regular sans font css', () => {
      expect(getSansRegular('igbo')).toMatchSnapshot();
    });

    it('should fail gracefully given an invalid service name', () => {
      expect(getSansRegular('default')).toBeUndefined();
    });
  });

  describe('getSansItalic', () => {
    it('should return regular sans italic font css', () => {
      expect(getSansItalic('yoruba')).toMatchSnapshot();
    });
  });

  describe('getSansBold', () => {
    it('should return bold sans font css', () => {
      expect(getSansBold('pidgin')).toMatchSnapshot();
    });
  });

  describe('getSansBoldItalic', () => {
    it('should return bold italic font css', () => {
      expect(getSansBoldItalic('igbo')).toMatchSnapshot();
    });
  });

  describe('getSerifMedium', () => {
    it('should return medium serif font css', () => {
      expect(getSerifMedium('news')).toMatchSnapshot();
    });
    it('should return regular sans bold font css for sevices without serif medium', () => {
      expect(getSerifMedium('igbo')).toMatchSnapshot();
    });
  });

  describe('getSerifMediumItalic', () => {
    it('should return serif medium italic font css', () => {
      expect(getSerifMedium('news')).toMatchSnapshot();
    });
    it('should return sans bold italic font css for sevice without serif medium italic', () => {
      expect(getSerifMediumItalic('yoruba')).toMatchSnapshot();
    });
  });
});
