import React from 'react';
import moment from 'moment';
import { jalaali } from './index';

const stories = storiesOf('Utilities|Psammead Moment Calendars', module);

const testMoment = moment('2019-01-01');

export const jalaaliPersian = () => {
  testMoment.locale('fa');
  const jalaaliMomentDate = jalaali.formatDate(testMoment);
  const gregorianMomentDate = testMoment.format('DD YYYY MMMM');
  testMoment.locale('en');
  const englishMomentDate = testMoment.format('DD YYYY MMMM');
  return (
    <div>
      <div>
        <b>Gregorian Calendar in English: </b>
        {englishMomentDate}
      </div>
      <div>
        <b>Gregorian Calendar in Persian: </b>
        {gregorianMomentDate}
      </div>
      <div>
        <b>Jalaali Calendar in Persian: </b>
        {jalaaliMomentDate}
      </div>
    </div>
  );
};

export const jalaaliPashto = () => {
  testMoment.locale('ps');
  const jalaaliMomentDate = jalaali.formatDate(testMoment);
  const gregorianMomentDate = testMoment.format('DD YYYY MMMM');
  testMoment.locale('en');
  const englishMomentDate = testMoment.format('DD YYYY MMMM');
  return (
    <div>
      <div>
        <b>Gregorian Calendar in English: </b>
        {englishMomentDate}
      </div>
      <div>
        <b>Gregorian Calendar in Pashto: </b>
        {gregorianMomentDate}
      </div>
      <div>
        <b>Jalaali Calendar in Pashto: </b>
        {jalaaliMomentDate}
      </div>
    </div>
  );
};
