var moment = require('moment');
require('moment/locale/ur');

moment.updateLocale('ur', {
  months: 'جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر'.split(
    '_'
  ),
});
