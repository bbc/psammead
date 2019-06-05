import {
  getSansRegular,
  getSansItalic,
  getSansBold,
  getSansBoldItalic,
  getSerifMedium,
  getSerifMediumItalic,
} from './font-styles';

const getHelmet = (weight, style) => `
    font-family: Helmet, Freesans, Helvetica, Arial, sans serif;
    font-weight: ${weight};
    font-style: ${style};
  `;

const getReithSerif = (weight, style) => `
   font-family: ReithSerif, Helvetica, Arial, sans-serif; 
   font-style: ${style};
   font-weight: ${weight};
  `;

describe('fonts', () => {
  describe('getSansRegular', () => {
    it('should return regular sans font css', () => {
      const fontCss = getHelmet(400, 'normal');
      expect(getSansRegular('igbo')).toEqual(fontCss);
    });

    it('should fail gracefully given an invalid service name', () => {
      expect(getSansRegular('default')).toBeUndefined();
    });
  });

  describe('getSansItalic', () => {
    it('should return regular sans italic font css', () => {
      const fontCss = getHelmet(400, 'italic');
      expect(getSansItalic('yoruba')).toEqual(fontCss);
    });
  });

  describe('getSansBold', () => {
    it('should return bold sans font css', () => {
      const fontCss = getHelmet(700, 'normal');
      expect(getSansBold('pidgin')).toEqual(fontCss);
    });
  });

  describe('getSansBoldItalic', () => {
    it('should return bold italic font css', () => {
      const fontCss = getHelmet(700, 'italic');
      expect(getSansBoldItalic('igbo')).toEqual(fontCss);
    });
  });

  describe('getSerifMedium', () => {
    it('should return medium serif font css', () => {
      const fontCss = getReithSerif(500, 'normal');
      expect(getSerifMedium('news')).toEqual(fontCss);
    });
    it('should return regular sans bold font css for sevices without serif medium', () => {
      const fontCss = getHelmet(700, 'normal');
      expect(getSerifMedium('igbo')).toEqual(fontCss);
    });
  });

  describe('getSerifMediumItalic', () => {
    it('should return serif medium italic font css', () => {
      const fontCss = getReithSerif(500, 'italic');
      expect(getSerifMediumItalic('news')).toEqual(fontCss);
    });
    it('should return sans bold italic font css for sevice without serif medium italic', () => {
      const fontCss = getHelmet(700, 'italic');
      expect(getSerifMediumItalic('yoruba')).toEqual(fontCss);
    });
  });
});
