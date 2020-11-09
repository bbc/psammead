// import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import * as scripts from '@bbc/gel-foundations/scripts';
import '@testing-library/jest-dom/extend-expect';

import {
  renderEpisodes,
  renderVideoEpisodes,
  exampleEpisodes,
  exampleVideoEpisodes,
} from './fixtures';

describe('Episode List ', () => {
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
});
