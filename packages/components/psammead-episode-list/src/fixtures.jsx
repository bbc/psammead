/* eslint-disable react/prop-types */
// This provides fixture data and helper functions that are useful to both storybook and unit tests
import React from 'react';
import styled from '@emotion/styled';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { formatDuration } from '@bbc/psammead-timestamp-container/utilities';
import SectionLabel from '@bbc/psammead-section-label';
import { C_MIDNIGHT_BLACK } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import EpisodeList from '.';

export const exampleEpisodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    brandTitle: 'Magazine de la Culture',
    date: '4 Avril 2020',
    duration: 'PT3M',
    durationLabel: 'Durée',
    time: '14:00',
    locale: 'fr',
  },
  {
    id: '2',
    url: 'https://www.bbc.com',
    brandTitle: 'Le Journal',
    episodeTitle: "Le premier rendez-vous d'information de la soirée.",
    date: '20 octobre 2020',
    duration: 'PT1H30M',
    durationLabel: 'Durée',
    time: '14:00',
    locale: 'fr',
  },
  {
    id: '3',
    url: 'https://www.bbc.com/blah',
    brandTitle: 'Afrique Avenir',
    episodeTitle: 'Tout savoir sur les jeunes entrepreneurs africains.',
    date: '21 octobre 2020',
    duration: 'PT59M',
    durationLabel: 'Durée',
    time: '14:00',
    locale: 'fr',
  },
];

const rtlEpisode = {
  brandTitle: 'یونیورسٹی کی اندھیری',
  date: 'بی بی سی اردو ڈاٹ کام، کرا',
  duration: 'PT3H29M',
  durationLabel: 'المدة',
  time: 'ریشان',
  locale: 'ar',
};

export const rtlEpisodes = [
  {
    id: '1',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  },
  {
    id: '2',
    url: 'https://www.bbc.com',
    ...rtlEpisode,
  },
  {
    id: '3',
    url: 'https://www.bbc.com/blah',
    ...rtlEpisode,
  },
];

export const exampleVideoEpisodes = exampleEpisodes.map(episode => ({
  ...episode,
  image: 'https://ichef.bbci.co.uk/images/ic/768x432/p08b22y1.png',
  altText: 'BBC News Afrique',
}));

export const exampleRtlVideoEpisodes = rtlEpisodes.map(episode => ({
  ...episode,
  image: 'https://ichef.bbci.co.uk/images/ic/768x432/p08b22y1.png',
  altText: 'BBC News Afrique',
}));

const StyledSpan = styled.span`
  padding-left: 8px;
  padding-right: 8px;
`;

const Spacer = styled.div`
  background: ${({ darkMode }) => (darkMode ? C_MIDNIGHT_BLACK : 'unset')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_SPACING_DBL};
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
  ${({ darkMode }) =>
    darkMode &&
    `[class*='Title'] {
    background: ${C_MIDNIGHT_BLACK};
    color: white;
  }`}
`;

const SurroundingComponents = ({
  children,
  script,
  service,
  dir,
  darkMode,
}) => (
  <Spacer darkMode={darkMode}>
    <StyledSectionLabel
      script={script}
      service={service}
      dir={dir}
      darkMode={darkMode}
    >
      Recent Episodes
    </StyledSectionLabel>
    {children}
  </Spacer>
);

export const renderEpisodes = ({
  episodes,
  script,
  service,
  dir,
  withSurroundingComponents,
  darkMode,
}) => {
  const Wrapper = withSurroundingComponents
    ? SurroundingComponents
    : React.Fragment;
  return (
    <Wrapper script={script} service={service} dir={dir} darkMode={darkMode}>
      <EpisodeList script={script} service={service} dir={dir}>
        {episodes.map(episode => (
          <EpisodeList.Link key={episode.id} href={episode.url}>
            <EpisodeList.Episode>
              {/* eslint-disable-next-line jsx-a11y/aria-role */}
              <span role="text">
                <VisuallyHiddenText>Audio, </VisuallyHiddenText>
                <EpisodeList.Title className="underlined_hover">
                  {episode.brandTitle}
                </EpisodeList.Title>
                <VisuallyHiddenText>, </VisuallyHiddenText>
                <EpisodeList.Description className="underlined_hover">
                  {episode.episodeTitle || `${episode.date}, ${episode.time}`}
                </EpisodeList.Description>
                <VisuallyHiddenText>, </VisuallyHiddenText>
                <VisuallyHiddenText>
                  {` ${episode.durationLabel} ${formatDuration({
                    duration: episode.duration,
                    format: episode.duration.includes('H')
                      ? 'h,mm,ss'
                      : 'mm,ss',
                    locale: episode.locale,
                  })} `}
                </VisuallyHiddenText>
                <EpisodeList.Metadata>
                  <span aria-hidden="true">
                    {` ${episode.durationLabel} ${formatDuration({
                      duration: episode.duration,
                      locale: episode.locale,
                    })}`}
                  </span>
                  {episode.episodeTitle && (
                    <span aria-hidden>
                      {' '}
                      <StyledSpan>|</StyledSpan> {episode.date}
                    </span>
                  )}
                </EpisodeList.Metadata>
              </span>
            </EpisodeList.Episode>
          </EpisodeList.Link>
        ))}
      </EpisodeList>
    </Wrapper>
  );
};

export const renderVideoEpisodes = ({
  episodes,
  script,
  service,
  dir,
  withSurroundingComponents,
  darkMode,
}) => {
  const Wrapper = withSurroundingComponents
    ? SurroundingComponents
    : React.Fragment;
  return (
    <Wrapper script={script} service={service} dir={dir} darkMode={darkMode}>
      <EpisodeList
        script={script}
        service={service}
        dir={dir}
        darkMode={darkMode}
      >
        {episodes.map(episode => (
          <EpisodeList.Link key={episode.id} href={episode.url}>
            <EpisodeList.Episode>
              <EpisodeList.Image
                src={episode.image}
                alt={episode.altText}
                duration={formatDuration({
                  duration: episode.duration,
                  locale: episode.locale,
                })}
              />
              <EpisodeList.Title className="underlined_hover">
                {episode.brandTitle}
              </EpisodeList.Title>
              <EpisodeList.Description className="underlined_hover">
                {episode.episodeTitle || episode.date}
              </EpisodeList.Description>
              {episode.episodeTitle && (
                <EpisodeList.Metadata>{episode.date}</EpisodeList.Metadata>
              )}
            </EpisodeList.Episode>
          </EpisodeList.Link>
        ))}
      </EpisodeList>
    </Wrapper>
  );
};
