import React from 'react';
import styled from '@emotion/styled';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import SectionLabel from '@bbc/psammead-section-label';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import {
  renderEpisodes,
  renderVideoEpisodes,
  exampleEpisodes,
  rtlEpisodes,
  exampleVideoEpisodes,
  exampleRtlVideoEpisodes,
} from './fixtures';

storiesOf('Components/EpisodeList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', ({ script, service, dir }) =>
    renderEpisodes(
      dir === 'rtl' ? rtlEpisodes : exampleEpisodes,
      script,
      service,
      dir,
    ),
  )
  .add('with single episode', ({ script, service, dir }) =>
    renderEpisodes(
      dir === 'rtl' ? [rtlEpisodes[0]] : [exampleEpisodes[0]],
      script,
      service,
      dir,
    ),
  )
  .add('with no episodes', ({ script, service, dir }) =>
    renderEpisodes([], script, service, dir),
  )
  .add('with video episodes', ({ script, service, dir }) =>
    renderVideoEpisodes(
      dir === 'rtl' ? exampleRtlVideoEpisodes : exampleVideoEpisodes,
      script,
      service,
      dir,
    ),
  )
  .add('with single video episode', ({ script, service, dir }) =>
    renderVideoEpisodes(
      dir === 'rtl' ? [exampleRtlVideoEpisodes[0]] : [exampleVideoEpisodes[0]],
      script,
      service,
      dir,
    ),
  )
  .add('with no video episodes', ({ script, service, dir }) =>
    renderVideoEpisodes([], script, service, dir),
  )
  .add('with surrounding components', ({ script, service, dir }) => {
    const Spacer = styled.div`
      margin: 0 ${GEL_SPACING};
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
        margin: 0 ${GEL_SPACING_DBL};
      }
    `;
    const StyledSectionLabel = styled(SectionLabel)`
      margin-bottom: 0;
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
        margin-bottom: ${GEL_SPACING_DBL};
      }
      @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
        margin-bottom: ${GEL_SPACING_TRPL};
      }
    `;

    return (
      <Spacer>
        <StyledSectionLabel script={script} service={service} dir={dir}>
          Recent Episodes
        </StyledSectionLabel>
        {renderVideoEpisodes(
          dir === 'rtl' ? exampleRtlVideoEpisodes : exampleVideoEpisodes,
          script,
          service,
          dir,
        )}
      </Spacer>
    );
  });
