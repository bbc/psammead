import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as scripts from '@bbc/gel-foundations/scripts';

import BasicExample from './examples/basic';

describe('Podcast Promo', () => {
  shouldMatchSnapshot(
    'Basic example should match snapshot',
    <BasicExample script={scripts.latin} service="russian" />,
  );
});
