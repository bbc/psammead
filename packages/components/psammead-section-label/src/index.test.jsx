import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import SectionLabel from './index';

describe('SectionLabel', () => {
  describe('With bar', () => {
    describe('With title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel script={latin}>
          This is text in a SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicitly showing the bar',
        <SectionLabel script={latin} bar>
          This is text in a SectionLabel, and there is a bar over to the right
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel script={latin} dir="ltr">
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

  describe('Without bar', () => {
    describe('With title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel script={latin} bar={false}>
          This is text in a SectionLabel.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with explicit text direction',
        <SectionLabel script={latin} dir="ltr" bar={false}>
          This is text in a SectionLabel rendering in ltr mode.
        </SectionLabel>,
      );

      shouldMatchSnapshot(
        'should render correctly with arabic script typography values',
        <SectionLabel script={arabic} dir="rtl" bar={false}>
          بعض محتوى النص
        </SectionLabel>,
      );
    });

    describe('Without title', () => {
      shouldMatchSnapshot(
        'should render correctly',
        <SectionLabel bar={false} />,
      );
    });
  });
});
