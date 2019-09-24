import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

const jalaaliHelper = require('./calendars/jalaali');

const stories = storiesOf('Utilities|Psammead Moment Calendars', module);

const persianMoment = moment('12-25-1995', 'MM-DD-YYYY');
persianMoment.locale('fa');
const momentDate = jalaaliHelper.getJalaaliCalendar(persianMoment);

stories.add('Jalaali', () => {
  return <div>`${momentDate}`</div>;
});
