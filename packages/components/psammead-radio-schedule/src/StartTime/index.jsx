import React from 'react';
import styled from 'styled-components';
import { Timestamp } from '@bbc/psammead-timestamp';

const StyledTimestamp = styled.div``;

export const StartTime = ({ locale, script, service }) => {
  <StyledTimestamp>
    <TimestampContainer
      timestamp={getTimestampValue(storyTimestamp)}
      dateTimeFormat="YYYY-MM-DD"
      format={text('Format', 'HH:mm')}
      isRelative={boolean('isRelative', false)}
      script={script}
      locale={locale}
      service={service}
    />
  </StyledTimestamp>;
};

StartTime.propTypes = {};
