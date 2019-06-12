import React from 'react';
import { number, string, bool, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Timestamp from '@bbc/psammead-timestamp';
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
}) => {
  if (!isValidDateTime(new Date(timestamp))) {
    return null;
  }

  return (
    <Timestamp
      datetime={formatUnixTimestamp(timestamp, dateTimeFormat, timezone)}
      padding={padding}
      script={script}
    >
      {prefix ? `${prefix} ` : null}
      {showRelativeTime(timestamp, isRelative, format, timezone)}
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
};

TimestampContainer.defaultProps = {
  isRelative: false,
  format: null,
  timezone: 'Europe/London',
  padding: true,
  prefix: null,
  suffix: null,
};

export default TimestampContainer;
