import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as scripts from '@bbc/gel-foundations/scripts';

import { renderEpisodes, exampleEpisodes, rtlEpisodes } from './fixtures';

describe('Episode List ', () => {
  shouldMatchSnapshot(
    'should render correctly with example episodes',
    renderEpisodes(exampleEpisodes, scripts.latin, 'news', 'ltr'),
  );
  shouldMatchSnapshot(
    'should render correctly with RTL episodes',
    renderEpisodes(rtlEpisodes, scripts.arabic, 'arabic', 'rtl'),
  );
  shouldMatchSnapshot(
    'should render correctly with a single episode',
    renderEpisodes([exampleEpisodes[0]], scripts.latin, 'news', 'ltr'),
  );
  shouldMatchSnapshot(
    'should render correctly with no episodes',
    renderEpisodes([], scripts.latin, 'news', 'ltr'),
  );
});
