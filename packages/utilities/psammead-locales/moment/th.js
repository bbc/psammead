var moment = require('moment');
require('moment/locale/th');

moment.updateLocale('th', {
  postformat: null,
  relativeTime: {
    past: 'เมื่อ  %s',
    m: '1 นาทีที่ผ่านมา',
    mm: '%d นาทีที่ผ่านมา',
    h: '1 ชั่วโมงที่แล้ว',
    hh: '%d {x} ชั่วโมงที่แล้ว',
  },
});
