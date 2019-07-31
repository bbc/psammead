import rawTimezones from 'moment-timezone/data/packed/latest.json';
import writeToNestedFile from '../writeToNestedFile';

const replaceOriginalTimezoneData = () =>
  writeToNestedFile(
    `../../tz/${rawTimezones.version}-raw.json`,
    JSON.stringify(Object.assign({}, rawTimezones, { zones: [], links: [] })),
  );

export default replaceOriginalTimezoneData;
