// This provides fixture data and helper functions that are useful to both storybook and unit tests
import React from 'react';
import styled from '@emotion/styled';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { formatDuration } from '@bbc/psammead-timestamp-container/utilities';
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

const StyledSpan = styled.span`
  padding-left: 8px;
  padding-right: 8px;
`;

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

export const renderEpisodes = (episodes, script, service, dir) => (
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
                format: episode.duration.includes('H') ? 'h,mm,ss' : 'mm,ss',
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
);
