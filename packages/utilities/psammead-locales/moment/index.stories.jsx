import React from 'react';
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
import './ar';
import './fa';
import './hi';
import './ig';
import './mr';
import './ne';
import './pa-in';
import './pcm';
import './ps';
import './pt-br';
import './ru';
import './sr';
import './sr-cyrl';
import './ta';
import './gu';
import './uk';
import './yo';

const stories = storiesOf('Utilities|Psammead Locales', module);

const locales = [
  { name: 'Arabic', locale: 'ar' },
  { name: 'Brasil', locale: 'pt-br' },
  { name: 'Hindi', locale: 'hi' },
  { name: 'Igbo', locale: 'ig' },
  { name: 'Marathi', locale: 'mr' },
  { name: 'Nepali', locale: 'ne' },
  { name: 'Pashto', locale: 'ps' },
  { name: 'Persian', locale: 'fa' },
  { name: 'Pidgin', locale: 'pcm' },
  { name: 'Punjabi', locale: 'pa-in' },
  { name: 'Russian', locale: 'ru' },
  { name: 'Serbian', locale: 'sr' },
  { name: 'Serbian Cyrillic', locale: 'sr-cyrl' },
  { name: 'Tamil', locale: 'ta' },
  { name: 'Gujarati', locale: 'gu' },
  { name: 'Ukrainian', locale: 'uk' },
  { name: 'Yoruba', locale: 'yo' },
];

// Fixed timestamp for 27 August 2019, 14:54 BST
const fixedTimestamp = 1566914061212;

/* eslint-disable prettier/prettier */
const funcs = [
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('MMMM Do YYYY, h:mm:ss a'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('dddd'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('MMM Do YY'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('YYYY [escaped text] YYYY'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format(),
  locale =>
    moment('20111031', 'YYYYMMDD')
      .locale(locale)
      .from(fixedTimestamp),
  locale =>
    moment('20120620', 'YYYYMMDD')
      .locale(locale)
      .from(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .startOf('day')
      .from(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .endOf('day')
      .from(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .startOf('hour')
      .from(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .subtract(10, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .subtract(6, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .subtract(3, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .subtract(1, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .add(1, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .add(3, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .add(10, 'days')
      .calendar(fixedTimestamp),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('LT'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('LTS'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('L'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('l'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('LL'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('ll'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('LLL'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('lll'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('LLLL'),
  locale =>
    moment(fixedTimestamp)
      .locale(locale)
      .format('llll'),
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

locales.forEach(({ name, locale }) => {
  stories.add(
    `Moment - ${name}(${locale})`,
    () => (
      <>
        <Table>
          <tbody>
            <tr>
              <th>British English</th>
              <th>{name}</th>
            </tr>
            {funcs.map((func, index) => (
              /* eslint-disable react/no-array-index-key */
              <tr key={index}>
                <td>{func('en-gb')}</td>
                <td>{func(locale)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paragraph>
          Spot an incorrect translation? Please write us a github issue{' '}
          <a href={issueHref(name)}>here</a> so we can fix it!
        </Paragraph>
      </>
    ),
    {
      notes,
    }
  );
});
