import React from 'react';
import styled from 'styled-components';
import { number, string, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import TimestampContainer from '../../../../containers/psammead-timestamp-container';

const StyledTimestamp = styled.div``;

const StartTime = ({ timestamp, timezone, locale, script, service }) => {
  return (
    <StyledTimestamp>
      <TimestampContainer
        timestamp={timestamp}
        dateTimeFormat="YYYY-MM-DD"
        format="HH:mm"
        isRelative={false}
        timezone={timezone}
        script={script}
        locale={locale}
        service={service}
      />
    </StyledTimestamp>
  );
};

StartTime.propTypes = {
  timestamp: number.isRequired,
  timezone: string.isRequired,
  locale: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default StartTime;
