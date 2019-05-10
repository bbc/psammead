import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { SectionDivider, SectionDividerWithBar } from './index';

describe('SectionDivider', () => {
  describe('With title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionDivider script={latin}>
        This is text in a SectionDivider.
      </SectionDivider>,
    );

    shouldMatchSnapshot(
      'should render correctly with explicit text direction',
      <SectionDivider script={latin}>
        This is text in a SectionDivider rendering in ltr mode.
      </SectionDivider>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionDivider script={arabic} dir="rtl">
        بعض محتوى النص
      </SectionDivider>,
    );
  });

  describe('Without title', () => {
    shouldMatchSnapshot('should render correctly', <SectionDivider />);
  });
});

describe('SectionDividerWithBar', () => {
  describe('With title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionDividerWithBar script={latin}>
        This is text in a SectionDividerWithBar.
      </SectionDividerWithBar>,
    );

    shouldMatchSnapshot(
      'should render correctly with explicit text direction',
      <SectionDividerWithBar script={latin}>
        This is text in a SectionDividerWithBar rendering in ltr mode.
      </SectionDividerWithBar>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionDividerWithBar script={arabic} dir="rtl">
        بعض محتوى النص
      </SectionDividerWithBar>,
    );
  });

  describe('Without title', () => {
    shouldMatchSnapshot('should render correctly', <SectionDividerWithBar />);
  });
});
