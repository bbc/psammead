import React from 'react';
import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import Grid from '@bbc/psammead-grid';
import { arrayOf, number, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/esm/prop-types';
import ProgramCard from './ProgramCard';
import StartTime from './StartTime';

const StartTimeWrapper = styled.div`
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
`;

const renderSchedule = ({ service, script, dir, locale, program }) => {
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

  // we should format the start-time here and pass the formatted start-time to the  program card
  const formattedStartTime = '13:00';

  return (
    <>
      <StartTimeWrapper>
        <StartTime
          timestamp={startTime}
          service={service}
          script={script}
          locale={locale}
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
        startTime={formattedStartTime}
        state={state}
        link={link}
        stateLabel={stateLabel}
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

const RadioSchedule = ({ schedules, ...props }) => (
  <Grid {...schedulesGridProps}>
    {schedules.map(program => (
      <Grid {...programGridProps}>{renderSchedule({ ...props, program })}</Grid>
    ))}
  </Grid>
);

const programPropTypes = shape({
  state: string.isRequired,
  stateLabel: string.isRequired,
  startTime: number.isRequired,
  locale: string.isRequired,
  timezone: string.isRequired,
  link: string.isRequired,
  brandTitle: string.isRequired,
  episodeTitle: string.isRequired,
  summary: string.isRequired,
  duration: string.isRequired,
  durationLabel: string.isRequired,
});

const sharedProps = {
  locale: string.isRequired,
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

RadioSchedule.defaultProps = {
  dir: 'ltr', // eslint-disable-line react/default-props-match-prop-types
};

export default RadioSchedule;
