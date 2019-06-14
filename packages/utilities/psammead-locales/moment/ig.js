import moment from 'moment';
/* eslint-disable */
//! moment.js locale configuration

// ;(function (global, factory) {
//    typeof exports === 'object' && typeof module !== 'undefined'
//        && typeof require === 'function' ? factory(require('../moment')) :
//    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
//    factory(global.moment)
// }(this, (function (moment) { 'use strict';

  // let ig = moment.defineLocale('ig', {
  moment.defineLocale('ig', {
    months: 'Jenụwarị_Febụwarị_Maachị_Eprel_Mee_Juun_Julaị_Ọgọọst_Septemba_Ọktọba_Nọvemba_Disemba'.split(
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
      future: 'na %s',
      past: '%s gara aga',
      s: 'ntabịanya ole na ole',
      ss: 'ntabịanya %d',
      m: 'otu nkeji',
      mm: 'nkeji %d',
      h: 'otu elekere',
      hh: 'elekere %d',
      d: 'otu ụbọchị',
      dd: 'Ụbọchị %d',
      M: 'otu ọnwa',
      MM: 'Ọnwa %d',
      y: 'Otu afọ',
      yy: 'Afọ %d',
    },
    dayOfMonthOrdinalParse: /(Nke )\d{1,2}/,
    ordinal : function (number) {
        return 'Nke ' + number;
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  });

//   return ig;
// });
