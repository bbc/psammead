import React from 'react';
import styled from 'styled-components';
import { number, string, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_RHINO } from '@bbc/psammead-styles/colours';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import TimestampContainer from '../../../../containers/psammead-timestamp-container';

const StyledTimestamp = styled.div`
  ${({ script }) => script && getMinion(script)}
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_RHINO};
`;

const StartTime = ({ timestamp, timezone, locale, script, service }) => {
  return (
    <StyledTimestamp>
      <TimestampContainer
        timestamp={timestamp}
        dateTimeFormat="YYYY-MM-DD"
        format="HH:mm"
        isRelative={false}
        padding={false}
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
