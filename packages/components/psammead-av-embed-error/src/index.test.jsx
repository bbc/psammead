import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import AvEmbedError from './index';

describe('AvEmbedError', () => {
  shouldMatchSnapshot(
    'renders an AV-embed error message',
    <AvEmbedError
      service="news"
      message="Sorry, we're unable to bring you this media right now."
    />,
  );
});
