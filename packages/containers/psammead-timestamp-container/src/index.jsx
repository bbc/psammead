/* eslint-disable react/forbid-prop-types */
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
  // localeData,
  // timezoneData,
}) => {
  if (!isValidDateTime(new Date(timestamp))) {
    return null;
  }

  if (locale) {
    moment.locale(locale);
  }

  return (
    <Timestamp
      datetime={formatUnixTimestamp(
        timestamp,
        dateTimeFormat,
        timezone,
        undefined,
        // localeData,
        // timezoneData,
      )}
      padding={padding}
      script={script}
      service={service}
    >
      {prefix ? `${prefix} ` : null}
      {showRelativeTime(
        timestamp,
        isRelative,
        format,
        timezone,
        locale,
        // localeData,
        // timezoneData,
      )}
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
  // localeData: object,
  // timezoneData: object,
};

TimestampContainer.defaultProps = {
  isRelative: false,
  format: null,
  timezone: 'Europe/London',
  padding: true,
  prefix: null,
  suffix: null,
  locale: 'en-GB',
  // localeData: null,
  // timezoneData: null,
};

export default TimestampContainer;
