import React, { Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { C_PEBBLE } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import notes from '../README.md';
import './ig';
import './pcm';
import './yo';
import {
  displayLocale,
  displayRelativeLocale,
} from '../../psammead-services/utils/convertToLocale';
import services from '../../psammead-services';

const stories = storiesOf('Utilities|Psammead Locales', module);

const storyServices = [
  {
    displayName: 'News (UTC)',
    name: 'news',
    locale: 'en-gb',
    timezone: 'UTC',
    localeData: services.news.localeData,
    timezoneData: { offsets: [0], untils: [null] },
  },
  {
    displayName: 'Igbo',
    name: 'igbo',
    locale: 'ig',
    timezone: 'Africa/Lagos',
    localeData: services.igbo.localeData,
    timezoneData: services.igbo.timezoneData,
  },
  {
    displayName: 'Mundo',
    name: 'mundo',
    locale: 'es-005',
    timezone: 'Europe/Madrid',
    localeData: services.mundo.localeData,
    timezoneData: services.mundo.timezoneData,
  },
  {
    displayName: 'Persian',
    name: 'persian',
    locale: 'fa',
    timezone: 'Europe/Madrid',
    localeData: services.persian.localeData,
    timezoneData: services.persian.timezoneData,
  },
  {
    displayName: 'Zhongwen',
    name: 'zhongwen',
    locale: 'zh_CN',
    timezone: 'Asia/Shanghai',
    localeData: services.zhongwen.localeData,
    timezoneData: services.zhongwen.timezoneData,
  },
  {
    displayName: 'Russian',
    name: 'russian',
    locale: 'ru-RU',
    timezone: 'Europe/Moscow',
    localeData: services.russian.localeData,
    timezoneData: services.russian.timezoneData,
  },
  {
    displayName: 'Bengali',
    name: 'bengali',
    locale: 'bn-BD',
    timezone: 'Asia/Dhaka',
    localeData: services.bengali.localeData,
    timezoneData: services.bengali.timezoneData,
  },
];

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30; // day * 30.436875; // 30; // (365 * 400 + 97) * 24 * 60 * 60 * 1000) / 400 / 12
const year = 365 * day; // match Moment formula

// set now to a predictable value:
const now = 1565787354967;

/* eslint-disable prettier/prettier */
const funcs = [
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('MMMM Do YYYY, h:mm:ss a'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('dddd'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format("MMM Do YY"),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('YYYY [escaped text LTS] h:mm:ss a'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format(),
  locale => moment(now - month).locale(locale).from(now),
  locale => moment(now - (6 * month) - day).locale(locale).from(now),
  locale => moment(now - 12 * hour).locale(locale).from(now),
  locale => moment(now + 11 * hour).locale(locale).from(now),
  locale => moment(now + 22 * minute).locale(locale).from(now),
  locale => moment(now - 10 * day).locale(locale).from(now),
  locale => moment(now - 6 * day).locale(locale).from(now),
  locale => moment(now - 3 * day).locale(locale).from(now),
  locale => moment(now - 1 * day).locale(locale).from(now),
  locale => moment(now - 1 * minute).locale(locale).from(now),
  locale => moment(now - 50 * second).locale(locale).from(now),
  locale => moment(now - 2.5 * year).locale(locale).from(now),
  locale => moment(now - 1.5 * year).locale(locale).from(now),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('LT'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('LTS'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('L'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('l'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('LL'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('ll'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('LLL'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('lll'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('LLLL'),
  (locale, timezone) => moment(now).locale(locale).tz(timezone).format('llll'),
];

const funcsNoMoment = [
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'MMMM Do YYYY, h:mm:ss a', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'dddd', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'MMM Do YY', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'YYYY [escaped text LTS] h:mm:ss a', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, '', now),
  localeData => displayRelativeLocale(localeData, now - month, now),
  localeData => displayRelativeLocale(localeData, now - 6 * month - day, now),
  localeData => displayRelativeLocale(localeData, now - 12 * hour, now),
  localeData => displayRelativeLocale(localeData, now + 11 * hour, now),
  localeData => displayRelativeLocale(localeData, now + 22 * minute, now),
  localeData => displayRelativeLocale(localeData, now - 10 * day, now),
  localeData => displayRelativeLocale(localeData, now - 6 * day, now),
  localeData => displayRelativeLocale(localeData, now - 3 * day, now),
  localeData => displayRelativeLocale(localeData, now - 1 * day, now),
  localeData => displayRelativeLocale(localeData, now - 1 * minute, now),
  localeData => displayRelativeLocale(localeData, now - 50 * second, now),
  localeData => displayRelativeLocale(localeData, now - 2.5 * year, now),
  localeData => displayRelativeLocale(localeData, now - 1.5 * year, now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'LT', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'LTS', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'L', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'l', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'LL', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'll', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'LLL', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'lll', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'LLLL', now),
  (localeData, timezoneData) => displayLocale(localeData, timezoneData, 'llll', now),
];
/* eslint-enable prettier/prettier */

const Table = styled.table`
  margin: ${GEL_SPACING_DBL};
  border: 1px solid ${C_PEBBLE};
  font-family: ${GEL_FF_REITH_SANS};

  & td,
  th {
    padding: ${GEL_SPACING_HLF} ${GEL_SPACING};
    border: 1px solid ${C_PEBBLE};
  }
`;

const Paragraph = styled.p`
  font-family: ${GEL_FF_REITH_SANS};
  margin: ${GEL_SPACING_DBL};
`;

const issueHref = localeName =>
  `https://github.com/bbc/psammead/issues/new?labels=bug&title=Moment+translation+correction+for+${localeName}&projects=bbc/20`;

storyServices.forEach(
  ({ displayName, name, locale, timezone, localeData, timezoneData }) => {
    const {
      localeData: localeDataNews,
      timezoneData: timezoneDataNews,
    } = services.news;

    stories.add(
      `Moment - ${name}(${locale})`,
      () => (
        <Fragment>
          <Table>
            <tbody>
              <tr>
                <th>News</th>
                <th>News (no Moment)</th>
                <th>{displayName}</th>
                <th>{displayName} (no Moment)</th>
              </tr>
              {funcs.map((func, index) => (
                /* eslint-disable react/no-array-index-key */
                <tr key={index}>
                  <td>{func('en-gb', 'Europe/London')}</td>
                  <td>
                    {funcsNoMoment[index](localeDataNews, timezoneDataNews)}
                  </td>
                  <td>{func(locale, timezone)}</td>
                  <td>{funcsNoMoment[index](localeData, timezoneData)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paragraph>
            Spot an incorrect translation? Please write us a github issue{' '}
            <a href={issueHref(name)}>here</a> so we can fix it!
          </Paragraph>
        </Fragment>
      ),
      {
        notes,
      },
    );
  },
);
