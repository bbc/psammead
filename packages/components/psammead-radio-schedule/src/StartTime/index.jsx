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

const StyledClock = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_RHINO};
  }
`;

const ClockIcon = () => {
  return <StyledClock>{coreIcons.clock}</StyledClock>;
};

const HorizontalLine = styled.div`
  border-top: 0.0625rem solid ${C_PEBBLE};
  width: 100vw;

  ${({ dir }) =>
    dir === 'ltr' ? `margin-left: 0.625rem;` : `margin-right: 0.625rem;`}
    
  top: ${({ script }) => 0.5 + script.minion.groupA.lineHeight / 2 / 16}rem;
`;

const StyledTimestamp = styled.span`
  > time {
    color: ${C_RHINO};
    ${({ script }) => script && getMinion(script)}
    ${({ service }) => service && getSansRegular(service)}
  }
`;

export const StartTimestamp = ({
  timestamp,
  timezone,
  locale,
  script,
  service,
}) => {
  return (
    <StyledTimestamp script={script} service={service}>
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
  timezone: string,
  locale: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

StartTimestamp.defaultProps = {
  timezone: 'Europe/London',
  locale: 'en-gb',
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
      <HorizontalLine dir={dir} script={script} />
    </StyledStartTime>
  );
};

StartTime.propTypes = {
  timestamp: number.isRequired,
  timezone: string,
  locale: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

StartTime.defaultProps = {
  timezone: 'Europe/London',
  locale: 'en-gb',
  dir: 'ltr',
};

export default StartTime;
