import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import SectionLabel from './index';

describe('SectionLabel', () => {
  describe('With bar', () => {
    describe('With plain title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel
          script={latin}
          labelId="test-section-label"
          service="news"
        >
          This is text in a SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicitly showing the bar',
        <SectionLabel
          script={latin}
          labelId="test-section-label"
          bar
          service="news"
        >
          This is text in a SectionLabel, and there is a bar over to the right
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel
          script={latin}
          dir="ltr"
          labelId="test-section-label"
          service="news"
        >
          This is text in a SectionLabel rendering in ltr mode.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with arabic script typography values',
        <SectionLabel
          script={arabic}
          dir="rtl"
          labelId="test-section-label"
          service="persian"
        >
          بعض محتوى النص
        </SectionLabel>,
      );
    });

    describe('With linking title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel
          script={latin}
          labelId="test-section-label"
          service="news"
          href="/igbo/other-index"
          linkText="See All"
        >
          This is text in a linking SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicitly showing the bar',
        <SectionLabel
          script={latin}
          labelId="test-section-label"
          bar
          service="news"
          href="/igbo/other-index"
          linkText="See All"
        >
          This is text in a SectionLabel, and there is a bar over to the right
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel
          script={latin}
          dir="ltr"
          labelId="test-section-label"
          service="news"
          href="/igbo/other-index"
          linkText="See All"
        >
          This is text in a SectionLabel rendering in ltr mode.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with arabic script typography values',
        <SectionLabel
          script={arabic}
          dir="rtl"
          labelId="test-section-label"
          service="persian"
          href="/igbo/other-index"
          linkText="See All"
        >
          بعض محتوى النص
        </SectionLabel>,
      );
    });
  });

  describe('Without bar', () => {
    describe('With plain title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel
          script={latin}
          bar={false}
          labelId="test-section-label"
          service="news"
        >
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
          service="news"
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
          service="persian"
        >
          بعض محتوى النص
        </SectionLabel>,
      );
    });

    describe('With linking title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel
          script={latin}
          bar={false}
          labelId="test-section-label"
          service="news"
          href="/igbo/other-index"
          linkText="See All"
        >
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
          service="news"
          href="/igbo/other-index"
          linkText="See All"
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
          service="persian"
          href="/igbo/other-index"
          linkText="See All"
        >
          بعض محتوى النص
        </SectionLabel>,
      );
    });
  });

  describe('When hideSectionHeader is true', () => {
    shouldMatchSnapshot(
      'should add styling to hide SectionLabel for all breakpoints',
      <SectionLabel
        script={latin}
        bar={false}
        visuallyHidden
        labelId="test-section-label"
        service="news"
      >
        This is the text in a SectionLabel
      </SectionLabel>,
    );
  });

  describe('Assertions', () => {
    it('should add extra props passed to the component', () => {
      const { container } = render(
        <SectionLabel
          script={latin}
          bar={false}
          visuallyHidden
          labelId="test-section-label"
          service="news"
          data-section-divider="section_name"
        >
          This is the text in a SectionLabel
        </SectionLabel>,
      );

      expect(
        container.querySelector('div').getAttribute('data-section-divider'),
      ).toEqual('section_name');
    });
  });

  describe('With heading overriden to be a strong element', () => {
    shouldMatchSnapshot(
      'should render correctly as a plain title with no bar',
      <SectionLabel
        script={latin}
        bar={false}
        labelId="test-section-label"
        service="news"
        overrideHeadingAs="strong"
      >
        This is text in a SectionLabel.
      </SectionLabel>,
    );
  });
});
