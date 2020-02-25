import React from 'react';
import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import Grid from '@bbc/psammead-grid';
import { arrayOf, number, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import ProgramCard from './ProgramCard';
import StartTime from './StartTime';

const StartTimeWrapper = styled.div`
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
`;

// Using flex-box on browsers that do not support grid will break grid fallback defined in psammead-grid
const StyledGrid = styled(Grid)`
  @supports (display: grid) {
    display: flex;
    flex-direction: column;
  }
  position: relative;
`;

const renderSchedule = ({
  service,
  script,
  dir,
  timezone,
  locale,
  program,
}) => {
  const {
    state,
    stateLabel,
    startTime,
    link,
    brandTitle,
    episodeTitle,
    summary,
    duration,
    durationLabel,
  } = program;

  return (
    <>
      <StartTimeWrapper>
        <StartTime
          timestamp={startTime}
          service={service}
          script={script}
          locale={locale}
          timezone={timezone}
          dir={dir}
        />
      </StartTimeWrapper>
      <ProgramCard
        duration={duration}
        summary={summary}
        durationLabel={durationLabel}
        service={service}
        script={script}
        dir={dir}
        brandTitle={brandTitle}
        episodeTitle={episodeTitle}
        startTime={startTime}
        state={state}
        link={link}
        stateLabel={stateLabel}
        timezone={timezone}
        locale={locale}
      />
    </>
  );
};

const schedulesGridProps = {
  enableGelGutters: true,
  columns: {
    group0: 4,
    group1: 4,
    group2: 6,
    group3: 6,
    group4: 8,
    group5: 8,
  },
  margins: {
    group0: true,
    group1: true,
    group2: true,
  },
};

const programGridProps = {
  item: true,
  columns: {
    group0: 4,
    group1: 4,
    group2: 6,
    group3: 2,
    group4: 2,
    group5: 2,
  },
};

/*
Currently, we are passing a list of schedules to this component and mapping
through the list to render a star-time and program-card, inside a gird.
We intend to move the map functionality out of psammead in a future iteration.
*/
const RadioSchedule = ({ schedules, dir, ...props }) => (
  <Grid as="ul" dir={dir} {...schedulesGridProps}>
    {schedules.map(({ id, ...program }) => (
      <StyledGrid
        dir={dir}
        parentColumns={schedulesGridProps.columns}
        parentEnableGelGutters
        {...programGridProps}
        key={id}
        forwardedAs="li"
      >
        {renderSchedule({ ...props, dir, program })}
      </StyledGrid>
    ))}
  </Grid>
);

const programPropTypes = shape({
  state: string.isRequired,
  stateLabel: string.isRequired,
  startTime: number.isRequired,
  link: string.isRequired,
  brandTitle: string.isRequired,
  episodeTitle: string.isRequired,
  summary: string.isRequired,
  duration: string.isRequired,
  durationLabel: string.isRequired,
});

const sharedProps = {
  timezone: string,
  locale: string,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

renderSchedule.propTypes = {
  program: programPropTypes.isRequired,
  ...sharedProps,
};

RadioSchedule.propTypes = {
  schedules: arrayOf(programPropTypes).isRequired,
  ...sharedProps,
};

/* eslint-disable react/default-props-match-prop-types */
RadioSchedule.defaultProps = {
  dir: 'ltr',
  timezone: 'Europe/London',
  locale: 'en-gb',
};

export default RadioSchedule;
