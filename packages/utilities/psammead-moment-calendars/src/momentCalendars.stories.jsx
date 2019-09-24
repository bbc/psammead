import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

const jalaaliHelper = require('./calendars/jalaali');

const stories = storiesOf('Utilities|Psammead Moment Calendars', module);

const testMoment = moment('09-20-2019', 'MM-DD-YYYY');
testMoment.locale('fa');
const momentDate = jalaaliHelper.getJalaaliCalendar(testMoment);
stories.add('Jalaali Persian', () => {
  return <div>{momentDate}</div>;
});

// testMoment.locale('ps');
// momentDate = jalaaliHelper.getJalaaliCalendar(testMoment);
// stories.add('Jalaali Pashto', () => {
//   return <div>{momentDate}</div>;
// });
