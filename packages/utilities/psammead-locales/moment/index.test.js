import moment from 'moment';
import './ig';

const config = [
  {
    format: 'L',
    timestamp: 1520355934123,
  },
];

const locales = [{ locale: 'ig', localeName: 'Igbo' }];

locales.forEach(({ locale, localeName }) => {
  config.forEach(({ format, timestamp }) => {
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
