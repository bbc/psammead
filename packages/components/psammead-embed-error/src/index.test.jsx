import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import EmbedError from './index';

describe('EmbedError', () => {
  shouldMatchSnapshot(
    'renders a default embed error',
    <EmbedError message="Sorry, we're unable to bring you this media right now." />,
  );
});
