import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import SectionDivider from './index';

describe('SectionDivider', () => {
  describe('With title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionDivider script={latin}>
        This is text in a SectionDivider.
      </SectionDivider>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionDivider script={arabic}>بعض محتوى النص</SectionDivider>,
    );
  });

  describe('With inline title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionDivider script={latin} inline>
        This is text in a SectionDivider.
      </SectionDivider>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionDivider script={arabic} inline>
        بعض محتوى النص
      </SectionDivider>,
    );
  });

  describe('Without title', () => {
    shouldMatchSnapshot('should render correctly', <SectionDivider />);
  });
});
