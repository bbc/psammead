// import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import * as scripts from '@bbc/gel-foundations/scripts';
import '@testing-library/jest-dom/extend-expect';

import { renderEpisodes, exampleEpisodes, rtlEpisodes } from './fixtures';

describe('Episode List ', () => {
  it('should render the list', () => {
    const { getByRole } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getByRole('list')).toBeInTheDocument();
  });

  it('should render the list item', () => {
    const { getAllByRole } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getAllByRole('listitem')[0]).toBeInTheDocument();
  });

  it('should render the brand title', () => {
    const { getByText } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getByText('Some other Brand')).toBeInTheDocument();
  });

  it('should render the episode title', () => {
    const { getByText } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getByText('Brandy Brand Talks About Hedgehogs')).toBeInTheDocument();
  });

  it('should render the link', () => {
    const { getByText } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getByText('Some other Brand').closest('a')).toHaveAttribute(
      'href',
      'https://www.bbc.com',
    );
  });

  it('should render the media indicator', () => {
    // TODO
  });

  it('should render the duration', () => {
    const { getAllByText } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getAllByText('Duration 59:00')[0]).toBeInTheDocument();
  });

  it('should render the date', () => {
    const { getAllByText } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getAllByText('4 Avril 2020')[0]);
  });

  it('should render the correct number of episodes', () => {
    const { getAllByRole } = render(
      renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
    );

    expect(getAllByRole('listitem').length).toEqual(3);
  });

  it('should not render a list when there is only one episode', () => {
    const { queryByRole } = render(
      renderEpisodes([exampleEpisodes[0]], scripts.latin, 'news', 'ltr'),
    );

    expect(queryByRole('list')).not.toBeInTheDocument();
    expect(queryByRole('listitem')).not.toBeInTheDocument();
  });
});
