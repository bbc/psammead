import React from 'react';
import styled from 'styled-components';
import { number, string, shape, oneOf } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_RHINO, C_PEBBLE } from '@bbc/psammead-styles/colours';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { coreIcons } from '@bbc/psammead-assets/svgs';
import TimestampContainer from '@bbc/psammead-timestamp-container';

const StyledStartTime = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTimestamp = styled.span`
  ${({ script }) => script && getMinion(script)}
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_RHINO};
`;

const StyledClock = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_RHINO};
  }
`;

const HorizontalLine = styled.hr`
  color: ${C_PEBBLE};
  background-color: ${C_PEBBLE};
  border: none;
  height: 1px;
  width: 100vw;
  ${({ dir }) => (dir === 'ltr' ? `margin-left: 10px;` : `margin-right: 10px;`)}
  margin-top: 0;
  margin-bottom: 0;
`;

export const StartTimestamp = ({
  timestamp,
  timezone,
  locale,
  script,
  service,
}) => {
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

StartTimestamp.propTypes = {
  timestamp: number.isRequired,
  timezone: string.isRequired,
  locale: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

const ClockIcon = () => {
  return <StyledClock>{coreIcons.clock}</StyledClock>;
};

const StartTime = ({ timestamp, timezone, locale, script, service, dir }) => {
  return (
    <StyledStartTime>
      <ClockIcon />
      <StartTimestamp
        timestamp={timestamp}
        timezone={timezone}
        locale={locale}
        script={script}
        service={service}
      />
      <HorizontalLine dir={dir} />
    </StyledStartTime>
  );
};

StartTime.propTypes = {
  timestamp: number.isRequired,
  timezone: string.isRequired,
  locale: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

StartTime.defaultProps = {
  dir: 'ltr',
};

export default StartTime;
