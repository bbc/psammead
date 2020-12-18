import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import * as scripts from '@bbc/gel-foundations/scripts';
import '@testing-library/jest-dom/extend-expect';

import {
  renderEpisodes,
  renderVideoEpisodes,
  exampleEpisodes,
  exampleVideoEpisodes,
} from './fixtures';
import EpisodeList from '.';

describe('Episode List ', () => {
  shouldMatchSnapshot(
    'should render video episodes correctly',
    renderEpisodes({
      episodes: exampleVideoEpisodes,
      script: scripts.latin,
      service: 'news',
      dir: 'ltr',
    }),
  );

  shouldMatchSnapshot(
    'should render radio episodes correctly',
    renderEpisodes({
      episodes: exampleEpisodes,
      script: scripts.latin,
      service: 'news',
      dir: 'ltr',
    }),
  );

  it('should render the list', () => {
    const { getByRole } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getByRole('list')).toBeInTheDocument();
  });

  it('should render the list item', () => {
    const { getAllByRole } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getAllByRole('listitem')[0]).toBeInTheDocument();
  });

  it('should render the brand title', () => {
    const { getByText } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getByText('Le Journal')).toBeInTheDocument();
  });

  it('should render the episode title', () => {
    const { getByText } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(
      getByText("Le premier rendez-vous d'information de la soirée."),
    ).toBeInTheDocument();
  });

  it('should render the link', () => {
    const { getByText } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(
      getByText(exampleEpisodes[0].brandTitle).closest('a'),
    ).toHaveAttribute('href', exampleEpisodes[0].url);
  });

  it('should render the media indicator', () => {
    const { container } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );
    const svgs = container.querySelectorAll('svg');

    expect(svgs).toHaveLength(3);
  });

  it('should render the duration', () => {
    const { getAllByText } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getAllByText('Durée 59:00')[0]).toBeInTheDocument();
  });

  it('should render the date', () => {
    const { getAllByText } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getAllByText('4 Avril 2020, 14:00')[0]);
  });

  it('should render the correct number of episodes', () => {
    const { getAllByRole } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getAllByRole('listitem').length).toEqual(3);
  });

  it('should not render a list when there is only one episode', () => {
    const { queryByRole } = render(
      renderEpisodes({
        episodes: [exampleEpisodes[0]],
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(queryByRole('list')).not.toBeInTheDocument();
    expect(queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should correctly handle images', () => {
    const { container } = render(
      renderVideoEpisodes({
        episodes: [exampleVideoEpisodes[0]],
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(
      container.querySelector(`img[src='${exampleVideoEpisodes[0].image}']`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`img[alt='${exampleVideoEpisodes[0].altText}']`),
    ).toBeInTheDocument();
  });

  it('should include the data-e2e attribute if passed', () => {
    const { container } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
        ulProps: { 'data-e2e': 'recent-episode-list' },
        liProps: { 'data-e2e': 'recent-episode-list-item' },
      }),
    );

    expect(container.querySelector('ul')).toHaveAttribute(
      'data-e2e',
      'recent-episode-list',
    );
    expect(container.querySelector('li')).toHaveAttribute(
      'data-e2e',
      'recent-episode-list-item',
    );
  });

  it('should render a span with role=text to avoid text splitting in screenreaders', () => {
    const { getAllByRole } = render(
      renderEpisodes({
        episodes: exampleEpisodes,
        script: scripts.latin,
        service: 'news',
        dir: 'ltr',
      }),
    );

    expect(getAllByRole('text')[0].closest('a')).toBeInTheDocument();
  });

  it('should render the vertical separator with an aria-hidden attribute', async () => {
    const { container } = render(<EpisodeList.VerticalSeparator />);
    const spanEl = container.getElementsByTagName('span')[0];
    expect(spanEl.hasAttribute('aria-hidden')).toEqual(true);
  });
});
