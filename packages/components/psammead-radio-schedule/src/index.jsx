import React from 'react';
import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import ProgramCard from './ProgramCard';
import StartTime from './StartTime';

const StartTimeWrapper = styled.div`
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
`;

const RadioSchedule = ({ service, script, schedules, dir, locale }) =>
  schedules.map(program => {
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
  });

export default RadioSchedule;
