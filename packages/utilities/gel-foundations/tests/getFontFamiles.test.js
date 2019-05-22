import { getSerif, getSans, getSansCond } from '../src/getFontFamilies';

describe('getFontFamilies', () => {
  describe('getSerif', () => {
    it('Returns news serif font family', () => {
      expect(getSerif('news')).toMatchSnapshot();
    });
  });
  describe('getSans', () => {
    it('Returns news sans font family', () => {
      expect(getSans('news')).toMatchSnapshot();
    });
  });
  describe('getSansCond', () => {
    it('Returns news sans condensed font family', () => {
      expect(getSansCond('news')).toMatchSnapshot();
    });
  });
});
