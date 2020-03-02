/* eslint-disable react/prop-types */
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import ProgramCard from '../ProgramCard';
import RadioSchedule from '../index';

export const sentenceCase = text =>
  text
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + text.substring(1);

// Will remove and clean up in future PRs
export const stateTypes = ['live', 'onDemand', 'onDemand', 'next'];
export const uniqueStates = ['live', 'onDemand', 'next'];

const getSchedule = (service, withLongSummary) => {
  const { text, articlePath, longText } = TEXT_VARIANTS[service];
  const programDurationLabel =
    service === 'arabic' ? 'المدة الزمنية' : 'Duration';

  return stateTypes.map((state, index) => ({
    id: index,
    state,
    stateLabel: service === 'arabic' ? 'مباشر' : sentenceCase(state),
    startTime: 1566914061212,
    link: articlePath,
    brandTitle: text,
    episodeTitle: '29/01/1990',
    summary:
      withLongSummary && state === 'live'
        ? `${longText} ${longText}`
        : longText,
    duration: 'PT45M',
    durationLabel: programDurationLabel,
  }));
};

export const renderProgramCard = ({
  state,
  stateLabel,
  service = 'news',
  episodeTitle = '29/01/1990',
  duration = 'PT30M',
  durationLabel = 'Duration',
  startTime = 1566914061212,
  displaySummary = boolean('show summary', true),
}) => {
  const { text, articlePath, longText, dir, locale, timezone } = TEXT_VARIANTS[
    service
  ];
  const programDurationLabel = dir === 'rtl' ? 'المدة الزمنية' : durationLabel;
  const programStateLabel = dir === 'rtl' ? 'مباشر' : stateLabel;

  return (
    <ProgramCard
      service={service}
      script={dir === 'rtl' ? arabic : latin}
      dir={dir}
      brandTitle={text}
      summary={displaySummary ? longText : null}
      episodeTitle={episodeTitle}
      duration={duration}
      startTime={startTime}
      state={state}
      link={articlePath}
      durationLabel={programDurationLabel}
      stateLabel={programStateLabel}
      timezone={timezone}
      locale={locale}
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
