import cjkThaiSizingGroup from '../sizingGroup/cjk_thai';
import hindiNepaliBengaliTypography from '../sizingGroup/hindi_nepali_bengali';

export const latinScript = {
  fontFamily: 'Helmet, Freesans, Helvetica, Arial, sans-serif',
  reith: true,
};

export const ethiopicScript = {
  fontFamily: 'NotoSansEthiopic, Arial, Verdana, Geneva, Helvetica, sans-serif',
  reith: false,
  sizingGroup: cjkThaiSizingGroup,
};

export const hindiScript = {
  fontFamily: 'Arial, Verdana, Geneva, Helvetica, sans-serif',
  reith: false,
  sizingGroup: hindiNepaliBengaliTypography,
};

export const nepaliScript = {
  fontFamily: 'Arial, Verdana, Geneva, Helvetica, sans-serif',
  reith: false,
  sizingGroup: hindiNepaliBengaliTypography,
};

export const bengaliScript = {
  fontFamily: 'Shonar_bangla, Helmet, Freesans, Helvetica, Arial, sans-serif',
  reith: false,
  sizingGroup: hindiNepaliBengaliTypography,
};
