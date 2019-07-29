import moment from 'moment-timezone/moment-timezone-utils';
import writeToNestedFile from '../writeToNestedFile';
import writeNewTimezoneData from '.';

jest.mock(
  'moment-timezone/data/packed/latest.json',
  () => ({
    version: 'versionNumber',
    zones: [
      'Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5',
      'Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6',
    ],
    links: [
      'Africa/Lagos|Africa/Bangui',
      'Africa/Lagos|Africa/Brazzaville',
      'Africa/Lagos|Africa/Douala',
    ],
  }),
  { virtual: true },
);

jest.mock('moment-timezone/moment-timezone-utils', () => ({
  tz: {
    filterLinkPack: jest.fn(),
    unpack: input => input,
  },
}));

moment.tz.filterLinkPack.mockImplementation(() => ({
  version: 'versionNumber',
  zones: [
    'America/Sprinfield|slim-apple',
    'The/Shire|slim-pear',
    'Earth/Gothem_City|slim-orange',
  ],
}));

jest.mock('../writeToNestedFile', () => jest.fn());

describe('writeNewTimezoneData', () => {
  it('Should stuff', () => {
    writeNewTimezoneData(1234, 5678);

    expect(moment.tz.filterLinkPack).toHaveBeenCalledWith(
      {
        links: [],
        version: 'versionNumber',
        zones: [
          'Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5',
          'Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6',
          { name: 'Africa/Bangui' },
          { name: 'Africa/Brazzaville' },
          { name: 'Africa/Douala' },
        ],
      },
      1234,
      5678,
    );

    expect(writeToNestedFile).toHaveBeenCalledTimes(3);
    expect(writeToNestedFile).toHaveBeenCalledWith(
      '../tz/Earth/Gothem_City.js',
      'var moment = require("moment-timezone"); moment.tz.add(\'Earth/Gothem_City|slim-orange\');',
    );
    expect(writeToNestedFile).toHaveBeenCalledWith(
      '../tz/The/Shire.js',
      'var moment = require("moment-timezone"); moment.tz.add(\'The/Shire|slim-pear\');',
    );
    expect(writeToNestedFile).toHaveBeenCalledWith(
      '../tz/America/Sprinfield.js',
      'var moment = require("moment-timezone"); moment.tz.add(\'America/Sprinfield|slim-apple\');',
    );
  });
});
