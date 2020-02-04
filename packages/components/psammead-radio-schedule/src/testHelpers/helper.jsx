/* eslint-disable react/prop-types */
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import React from 'react';
import ProgramCard from '../ProgramCard';
import RadioSchedule from '../index';

export const sentenceCase = text =>
  text
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + text.substring(1);

export const stateTypes = ['onDemand', 'live', 'next'];

const getSchedule = service => {
  const { text, articlePath, longText, locale } = TEXT_VARIANTS[service];

  return stateTypes.map(state => ({
    state,
    stateLabel: sentenceCase(state),
    startTime: 1566914061212,
    locale,
    timezone: 'Europe/London',
    link: articlePath,
    brandTitle: text,
    episodeTitle: '29/01/1990',
    summary: longText,
    duration: '45:00',
    durationLabel: 'Duration',
  }));
};

export const renderProgramCard = ({
  state,
  stateLabel,
  service = 'news',
  episodeTitle = '29/01/1990',
  duration = '30:00',
  durationLabel = 'Duration',
}) => {
  const { text, articlePath, longText, dir } = TEXT_VARIANTS[service];
  return (
    <ProgramCard
      service={service}
      script={dir === 'rtl' ? arabic : latin}
      dir={dir}
      brandTitle={text}
      summary={longText}
      episodeTitle={episodeTitle}
      duration={duration}
      startTime="13:00"
      state={state}
      link={articlePath}
      durationLabel={durationLabel}
      stateLabel={stateLabel}
    />
  );
};

export const renderRadioSchedule = ({
  service = 'news',
  locale = 'en-gb',
  script = latin,
  dir = 'ltr',
}) => (
  <RadioSchedule
    schedules={getSchedule(service)}
    locale={locale}
    script={script}
    service={service}
    dir={dir}
  />
);
