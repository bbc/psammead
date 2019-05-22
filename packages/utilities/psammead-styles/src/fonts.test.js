import {
  getSansRegular,
  getSansItalic,
  getSansBold,
  getSansBoldItalic,
  getSerifMedium,
  getSerifMediumItalic,
} from './fonts';

describe('fonts', () => {
  describe('getSansRegular', () => {
    it('should return sans font css', () => {
      expect(getSansRegular('news')).toMatchSnapshot();
    });

    it('should fail gracefully given an invalid service name', () => {
      expect(getSansRegular('default')).toBeUndefined();
    });
  });

  describe('getSansItalic', () => {
    it('should return sans italic font css', () => {
      expect(getSansItalic('news')).toMatchSnapshot();
    });

    it('should return regular font css for services without italic', () => {
      expect(getSansItalic('persian')).toMatchSnapshot();
    });
  });

  describe('getSansBold', () => {
    it('should return bold sans font css', () => {
      expect(getSansBold('arabic')).toMatchSnapshot();
    });
  });

  describe('getSansBoldItalic', () => {
    it('should return bold italic font css', () => {
      expect(getSansBoldItalic('news')).toMatchSnapshot();
    });

    it('should return bold font css for services without bold-italic', () => {
      expect(getSansBoldItalic('arabic')).toMatchSnapshot();
    });
  });

  describe('getSerifMedium', () => {
    it('should return serif medium font css', () => {
      expect(getSerifMedium('news')).toMatchSnapshot();
    });

    it('should return sans bold font css for sevices without serif medium', () => {
      expect(getSerifMedium('arabic')).toMatchSnapshot();
    });
  });

  describe('getSerifMediumItalic', () => {
    it('should return serif medium italic font css', () => {
      expect(getSerifMediumItalic('news')).toMatchSnapshot();
    });

    it('should return sans bold font css for sevices without serif medium italic', () => {
      expect(getSerifMediumItalic('arabic')).toMatchSnapshot();
    });
  });
});
