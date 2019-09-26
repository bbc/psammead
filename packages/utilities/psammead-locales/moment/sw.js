var moment = require('moment');
require('moment/locale/sw');

moment.updateLocale('sw', {
  months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Disemba'.split(
    '_'
  ),
});
