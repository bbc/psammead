import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import SectionLabel from './index';

describe('SectionLabel', () => {
  describe('With bar', () => {
    describe('With title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel script={latin} labelId="test-section-label">
          This is text in a SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicitly showing the bar',
        <SectionLabel script={latin} labelId="test-section-label" bar>
          This is text in a SectionLabel, and there is a bar over to the right
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel script={latin} dir="ltr" labelId="test-section-label">
          This is text in a SectionLabel rendering in ltr mode.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with arabic script typography values',
        <SectionLabel script={arabic} dir="rtl" labelId="test-section-label">
          بعض محتوى النص
        </SectionLabel>,
      );
    });
  });

  describe('Without bar', () => {
    describe('With title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel script={latin} bar={false} labelId="test-section-label">
          This is text in a SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel
          script={latin}
          dir="ltr"
          bar={false}
          labelId="test-section-label"
        >
          This is text in a SectionLabel rendering in ltr mode.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with arabic script typography values',
        <SectionLabel
          script={arabic}
          dir="rtl"
          bar={false}
          labelId="test-section-label"
        >
          بعض محتوى النص
        </SectionLabel>,
      );
    });
  });

  describe('When hideSectionHeader is true', () => {
    shouldMatchSnapshot(
      'should add styling to hide SectionLabel when width of screen is less than 600 px',
      <SectionLabel
        script={latin}
        bar={false}
        visuallyHidden
        labelId="test-section-label"
      />,
    );
  });
});
