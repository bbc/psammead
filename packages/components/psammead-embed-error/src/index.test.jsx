import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import EmbedError from './index';

describe('EmbedError', () => {
  shouldMatchSnapshot(
    'renders an embed error message',
    <EmbedError
      service="news"
      message="Sorry, we're unable to bring you this media right now."
    />,
  );
});
