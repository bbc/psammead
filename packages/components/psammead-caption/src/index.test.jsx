import React from 'react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Caption from '.';

shouldMatchSnapshot(
  'should render Caption with some offscreen text',
  <Caption script={latin}>
    This is some Caption text
    <VisuallyHiddenText>Some offscreen text</VisuallyHiddenText>
  </Caption>,
);
