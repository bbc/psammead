import rawTimezones from 'moment-timezone/data/packed/latest.json';
import moment from 'moment-timezone/moment-timezone-utils';
import writeToNestedFile from './writeToNestedFile';

const newZonesData = rawTimezones.zones.map(moment.tz.unpack);
const newLinksData = rawTimezones.links.map(link => link.split('|'));

const filteredData = (start, end) =>
  moment.tz.filterLinkPack(
    {
      version: rawTimezones.version,
      zones: newLinksData.reduce((zones, link) => {
        const newEntry = { ...newZonesData.find(z => z.name === link[0]) };
        newEntry.name = link[1]; // eslint-disable-line prefer-destructuring
        zones.push(newEntry);
        return zones;
      }, newZonesData),
      links: [],
    },
    start,
    end,
  );

const writeTimezoneDataToFile = zone => {
  const fileContents = `var moment = require("moment-timezone"); moment.tz.add('${zone}');`;
  const zoneName = zone.split('|')[0];

  writeToNestedFile(`../tz/${zoneName}.js`, fileContents);
};

const writeNewTimezoneData = (startYear = -Infinity, endYear = Infinity) => {
  const { zones } = filteredData(startYear, endYear);

  zones.forEach(writeTimezoneDataToFile);
};

export default writeNewTimezoneData;
