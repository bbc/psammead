import moment from 'moment';
import './ig';

const timestamp = 1520355934123;

const config = [
  { format: 'LT' },
  { format: 'LTS' },
  { format: 'L' },
  { format: 'l' },
  { format: 'LL' },
  { format: 'll' },
  { format: 'LLL' },
  { format: 'lll' },
  { format: 'LLLL' },
  { format: 'llll' },
];

const locales = [{ locale: 'ig', localeName: 'Igbo' }];

locales.forEach(({ locale, localeName }) => {
  config.forEach(({ format }) => {
    const enGB = moment(timestamp)
      .locale('en-gb')
      .format(format);

    it(`should localise ${enGB} to ${localeName}`, () => {
      moment.locale(locale);
      expect(
        moment(timestamp)
          .locale('en-gb')
          .format(format),
      ).toMatchSnapshot();
    });
  });
});
