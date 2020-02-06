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

const getSchedule = (service, withLongSummary) => {
  const { text, articlePath, longText } = TEXT_VARIANTS[service];

  return stateTypes.map((state, index) => ({
    id: index,
    state,
    stateLabel: sentenceCase(state),
    startTime: 1566914061212,
    link: articlePath,
    brandTitle: text,
    episodeTitle: '29/01/1990',
    summary:
      withLongSummary && state === 'live'
        ? `${longText} ${longText}`
        : longText,
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
  timezone = 'Europe/London',
  script = latin,
  dir = 'ltr',
  withLongSummary = false,
}) => (
  <RadioSchedule
    schedules={getSchedule(service, withLongSummary)}
    locale={locale}
    timezone={timezone}
    script={script}
    service={service}
    dir={dir}
  />
);
