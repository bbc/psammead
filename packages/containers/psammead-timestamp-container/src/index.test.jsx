import React from 'react';
import { isNull, shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import '@bbc/psammead-locales/moment/ha';
import Timestamp from '.';

const defaultTimestamp = 1539969006000; // 19 October 2018
const noLeadingZeroTimestamp = 1530947227000; // 07 July 2018
const invalidData = '8640000000000001'; // A day holds 86,400,000 milliseconds - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Description

describe('Timestamp', () => {
  describe('with no data', () => {
    console.error = jest.fn(); // eslint-disable-line no-console
    isNull('should return null', <Timestamp />);
  });

  shouldMatchSnapshot(
    'should render without a leading zero on the day',
    <Timestamp
      timestamp={noLeadingZeroTimestamp}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      script={latin}
      locale="fa"
      service="persian"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly',
    <Timestamp
      timestamp={defaultTimestamp}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      script={latin}
      service="news"
    />,
  );

  isNull(
    'should handle invalid date',
    <Timestamp
      timestamp={invalidData}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      script={latin}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should add prefix and suffix',
    <Timestamp
      timestamp={defaultTimestamp}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      prefix="Prefix here "
      suffix=" suffix here"
      script={latin}
      service="news"
    />,
  );

  describe('assertions', () => {
    it('should render a hausa timestamp', () => {
      const { container } = render(
        <Timestamp
          timestamp={defaultTimestamp}
          dateTimeFormat="YYYY-MM-DD"
          format="D MMMM YYYY"
          isRelative={false}
          script={latin}
          locale="ha"
          service="hausa"
        />,
      );

      const time = container.querySelector('time');
      expect(time.textContent).toEqual('19 Oktoba 2018');
    });

    it('should render a hausa relative timestamp', () => {
      const { container } = render(
        <Timestamp
          timestamp={defaultTimestamp}
          dateTimeFormat="YYYY-MM-DD"
          format="D MMMM YYYY"
          isRelative
          script={latin}
          locale="ha"
          service="hausa"
        />,
      );

      const time = container.querySelector('time');
      expect(time.textContent).toEqual('11 months wuce');
    });
  });
});
