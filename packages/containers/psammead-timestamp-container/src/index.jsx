import React from 'react';
import { number, string, bool, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Timestamp from '@bbc/psammead-timestamp';
import moment from 'moment-timezone';
import {
  isValidDateTime,
  formatUnixTimestamp,
  showRelativeTime,
} from './timestampUtilities';

// Note that this next section is globally configuring moment.
// It is not possible to configure these on specific moment instances.
// The current requirements for rounding & thresholding are the same universally
// so this implementation method means that configuration is only run once, not
// on each render.

// always round downwards
// 59 minutes, 59 seconds ago -> 59 minutes ago
// https://momentjs.com/docs/#/customization/relative-time-rounding/
moment.relativeTimeRounding(Math.floor);
// Smallest relative timestamp is 'a minute ago'
// Otherwise, be exact
// https://momentjs.com/docs/#/customization/relative-time-threshold/
moment.relativeTimeThreshold('s', 0);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 30);
moment.relativeTimeThreshold('M', 12);

const TimestampContainer = ({
  timestamp,
  dateTimeFormat,
  format,
  isRelative,
  padding,
  prefix,
  suffix,
  timezone,
  script,
  locale,
  service,
}) => {
  if (!isValidDateTime(new Date(timestamp))) {
    return null;
  }

  if (locale) {
    moment.locale(locale);
  }

  return (
    <Timestamp
      datetime={formatUnixTimestamp(timestamp, dateTimeFormat, timezone)}
      padding={padding}
      script={script}
      service={service}
    >
      {prefix ? `${prefix} ` : null}
      {showRelativeTime(timestamp, isRelative, format, timezone, locale)}
      {suffix ? ` ${suffix}` : null}
    </Timestamp>
  );
};

TimestampContainer.propTypes = {
  timestamp: number.isRequired,
  dateTimeFormat: string.isRequired,
  isRelative: bool,
  format: string,
  timezone: string,
  padding: bool,
  prefix: string,
  suffix: string,
  script: shape(scriptPropType).isRequired,
  locale: string,
  service: string.isRequired,
};

TimestampContainer.defaultProps = {
  isRelative: false,
  format: null,
  timezone: 'Europe/London',
  padding: true,
  prefix: null,
  suffix: null,
  locale: null,
};

export default TimestampContainer;
