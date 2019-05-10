import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { SectionLabel, SectionLabelWithoutBar } from './index';

describe('SectionLabelWithoutBar', () => {
  describe('With title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionLabelWithoutBar script={latin}>
        This is text in a SectionLabelWithoutBar.
      </SectionLabelWithoutBar>,
    );

    shouldMatchSnapshot(
      'should render correctly with explicit text direction',
      <SectionLabelWithoutBar script={latin}>
        This is text in a SectionLabelWithoutBar rendering in ltr mode.
      </SectionLabelWithoutBar>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionLabelWithoutBar script={arabic} dir="rtl">
        بعض محتوى النص
      </SectionLabelWithoutBar>,
    );
  });

  describe('Without title', () => {
    shouldMatchSnapshot('should render correctly', <SectionLabelWithoutBar />);
  });
});

describe('SectionLabel', () => {
  describe('With title', () => {
    shouldMatchSnapshot(
      'should render correctly',
      <SectionLabel script={latin}>
        This is text in a SectionLabel.
      </SectionLabel>,
    );

    shouldMatchSnapshot(
      'should render correctly with explicit text direction',
      <SectionLabel script={latin}>
        This is text in a SectionLabel rendering in ltr mode.
      </SectionLabel>,
    );

    shouldMatchSnapshot(
      'should render correctly with arabic script typography values',
      <SectionLabel script={arabic} dir="rtl">
        بعض محتوى النص
      </SectionLabel>,
    );
  });

  describe('Without title', () => {
    shouldMatchSnapshot('should render correctly', <SectionLabel />);
  });
});
