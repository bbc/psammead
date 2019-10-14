import React from 'react';
import { number, string, bool, shape, func } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Timestamp from '@bbc/psammead-timestamp';
import {
  isValidDateTime,
  unixTimestampToMoment,
  formatUnixTimestamp,
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
  altCalendar,
}) => {
  let altDateTime;
  if (!isValidDateTime(new Date(timestamp))) {
    return null;
  }

  const mainDateTime = formatUnixTimestamp(
    timestamp,
    format,
    timezone,
    locale,
    isRelative,
  );

  if (altCalendar && !isRelative) {
    altDateTime = altCalendar.formatDate(
      unixTimestampToMoment(timestamp).locale(locale),
    );
  }

  return (
    <Timestamp
      datetime={formatUnixTimestamp(
        timestamp,
        dateTimeFormat,
        timezone,
        'en-gb',
      )}
      padding={padding}
      script={script}
      service={service}
    >
      {prefix ? `${prefix} ` : null}
      {altDateTime ? `${altDateTime} - ` : null}
      {mainDateTime}
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
  altCalendar: shape({
    formatDate: func.isRequired,
  }),
};

TimestampContainer.defaultProps = {
  isRelative: false,
  format: null,
  timezone: 'Europe/London',
  padding: true,
  prefix: null,
  suffix: null,
  locale: 'en-gb',
  altCalendar: null,
};

export default TimestampContainer;
