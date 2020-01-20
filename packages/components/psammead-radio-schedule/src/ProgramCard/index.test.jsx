import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import ProgramCard, { programStates } from './index';

// eslint-disable-next-line react/prop-types
const renderProgramCard = ({ state, service = 'news' }) => {
  const { text, articlePath, longText, dir } = TEXT_VARIANTS[service];
  return (
    <ProgramCard
      service={service}
      script={dir === 'rtl' ? arabic : latin}
      dir={dir}
      brandTitle={text}
      summary={longText}
      episodeTitle="29/01/1990"
      duration="30:00"
      state={state}
      ctaLink={articlePath}
    />
  );
};

describe('ProgramCard', () => {
  Object.keys(programStates).forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state }),
    );

    shouldMatchSnapshot(
      `should render correctly for ${state} in RTL`,
      renderProgramCard({ state, service: 'arabic' }),
    );
  });
});
