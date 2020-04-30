/* eslint-disable react/prop-types */
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import ProgramCard from '../ProgramCard';
import RadioSchedule from '../index';

// New locales
import '@bbc/psammead-locales/moment/am';
import '@bbc/psammead-locales/moment/ha';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/om';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/ps';
import '@bbc/psammead-locales/moment/rw';
import '@bbc/psammead-locales/moment/so';
import '@bbc/psammead-locales/moment/ti';

// Updated locales
import '@bbc/psammead-locales/moment/ar';
import '@bbc/psammead-locales/moment/az';
import '@bbc/psammead-locales/moment/bn';
import '@bbc/psammead-locales/moment/es';
import '@bbc/psammead-locales/moment/gu';
import '@bbc/psammead-locales/moment/hi';
import '@bbc/psammead-locales/moment/ky';
import '@bbc/psammead-locales/moment/mr';
import '@bbc/psammead-locales/moment/ne';
import '@bbc/psammead-locales/moment/pa-in';
import '@bbc/psammead-locales/moment/pt-br';
import '@bbc/psammead-locales/moment/ru';
import '@bbc/psammead-locales/moment/si';
import '@bbc/psammead-locales/moment/sr';
import '@bbc/psammead-locales/moment/sr-cyrl';
import '@bbc/psammead-locales/moment/sw';
import '@bbc/psammead-locales/moment/ta';
import '@bbc/psammead-locales/moment/th';
import '@bbc/psammead-locales/moment/uk';
import '@bbc/psammead-locales/moment/ur';
import '@bbc/psammead-locales/moment/uz';
import '@bbc/psammead-locales/moment/yo';

// Will remove and clean up in future PRs
export const stateTypes = ['live', 'onDemand', 'onDemand', 'next'];
export const uniqueStates = ['live', 'onDemand', 'next'];

const getSchedule = (service, withLongSummary) => {
  const { text, articlePath, longText, timezone } = TEXT_VARIANTS[service];
  const programDurationLabel =
    service === 'arabic' ? 'المدة الزمنية' : 'Duration';

  return stateTypes.map((state, index) => ({
    id: index,
    state,
    startTime: 1566914061212,
    link: articlePath,
    brandTitle: text,
    summary:
      withLongSummary && state === 'live'
        ? `${longText} ${longText}`
        : longText,
    duration: 'PT1H',
    durationLabel: programDurationLabel,
    timezone,
  }));
};

export const renderProgramCard = ({
  state,
  service = 'news',
  duration = 'PT30M',
  durationLabel = 'Duration',
  startTime = 1566914061212,
  displaySummary = boolean('show summary', true),
}) => {
  const { text, articlePath, longText, dir, locale, timezone } = TEXT_VARIANTS[
    service
  ];
  const programDurationLabel = dir === 'rtl' ? 'المدة الزمنية' : durationLabel;
  const nextLabel = dir === 'rtl' ? 'مباشر' : 'NEXT';
  const liveLabel = dir === 'rtl' ? 'مباشر' : 'LIVE';

  return (
    <ProgramCard
      service={service}
      script={dir === 'rtl' ? arabic : latin}
      dir={dir}
      brandTitle={text}
      summary={displaySummary ? longText : null}
      duration={duration}
      startTime={startTime}
      state={state}
      link={articlePath}
      durationLabel={programDurationLabel}
      nextLabel={nextLabel}
      liveLabel={liveLabel}
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
  selectedService = 'news',
}) => {
  const nextLabel = dir === 'rtl' ? 'مباشر' : 'NEXT';
  const liveLabel = dir === 'rtl' ? 'مباشر' : 'LIVE';

  return (
    <RadioSchedule
      schedules={getSchedule(selectedService, withLongSummary)}
      locale={locale}
      timezone={timezone}
      script={script}
      service={service}
      nextLabel={nextLabel}
      liveLabel={liveLabel}
      dir={dir}
    />
  );
};
