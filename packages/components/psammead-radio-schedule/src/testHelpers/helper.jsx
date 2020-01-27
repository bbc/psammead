/* eslint-disable react/prop-types, import/prefer-default-export */
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import React from 'react';
import ProgramCard from '../ProgramCard';

export const renderProgramCard = ({
  state,
  stateLabel,
  service = 'news',
  episodeTitle = '29/01/1990',
  duration = '30:00',
  durationLabel = 'duration',
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
