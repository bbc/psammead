/* eslint-disable react/prop-types, import/prefer-default-export */
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import React from 'react';
import ProgramCard from '../ProgramCard';

export const sentenceCase = text =>
  text
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + text.substring(1);

export const renderProgramCard = ({
  state,
  stateLabel,
  service = 'news',
  episodeTitle = '29/01/1990',
  duration = 'PT30M',
  durationLabel = 'Duration',
  startTime = 1566914061212,
}) => {
  const { text, articlePath, longText, dir, locale, timezone } = TEXT_VARIANTS[
    service
  ];
  return (
    <ProgramCard
      service={service}
      script={dir === 'rtl' ? arabic : latin}
      dir={dir}
      brandTitle={text}
      summary={longText}
      episodeTitle={episodeTitle}
      duration={duration}
      startTime={startTime}
      state={state}
      link={articlePath}
      durationLabel={durationLabel}
      stateLabel={stateLabel}
      timezone={timezone}
      locale={locale}
    />
  );
};
