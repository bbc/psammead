import moment from 'moment';
/* eslint-disable */
//! moment.js locale configuration

// ;(function (global, factory) {
//    typeof exports === 'object' && typeof module !== 'undefined'
//        && typeof require === 'function' ? factory(require('../moment')) :
//    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
//    factory(global.moment)
// }(this, (function (moment) { 'use strict';

  // let enGb = moment.defineLocale('ig', {
  moment.defineLocale('ig', {
    months: 'Jenụwarị_Febụwarị_Maachị_Eprel_Mee_Juun_Julaị_Ọgọọst_Septemba_Ọktọba_Nọvemba_Disemba '.split(
      '_',
    ),
    monthsShort: 'Jen_Feb_Maa_Epr_Mee_Juu_Jul_Ọgọ_Sep_Ọkt_Nov_Dis'.split('_'),
    weekdays: 'Sọnde_Mọnde_Tuzde_Wenesde_Tọsde_Fraịde_Satọde'.split(
      '_',
    ),
    weekdaysShort: 'Sọn_Mọn_Tuz_We_Tọs_Frai_Sat'.split('_'),
    weekdaysMin: 'Su_Mọ_Tu_We_Tọ_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm',
    },
    calendar: {
      sameDay: '[Taa na] LT',
      nextDay: '[Echi na] LT',
      nextWeek: 'dddd [na] LT',
      lastDay: '[Unyaahụ na] LT',
      lastWeek: 'dddd [gara aga na] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });

//   return enGb;
// });
