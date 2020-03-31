import React from 'react';
import styled from 'styled-components';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_EBON,
  C_KINGFISHER,
  C_METAL,
  C_POSTBOX,
  C_SHADOW,
  C_WHITE,
} from '@bbc/psammead-styles/colours';
import {
  getSansBold,
  getSansRegular,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import {
  getBrevier,
  getMinion,
  getPica,
} from '@bbc/gel-foundations/typography';
import { Link } from '@bbc/psammead-story-promo';
import { oneOf, shape, string, number } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import LiveLabel from '@bbc/psammead-live-label';
import {
  formatUnixTimestamp,
  formatDuration,
} from '@bbc/psammead-timestamp-container/utilities';

const CardWrapper = styled.div`
  padding-top: ${GEL_SPACING};
  background-color: ${C_WHITE};
  display: flex;
  flex-direction: column;
  border: 0.0625rem solid transparent;
  height: 100%;
`;

const TextWrapper = styled.div`
  padding: 0 ${GEL_SPACING};
  flex-grow: 1;
`;

const HeadingWrapper = styled.h3`
  ${({ service }) => service && getSerifMedium(service)};
  ${({ script }) => script && getPica(script)};
  color: ${({ headerTextColor }) => headerTextColor};
  margin: 0; /* Reset */
`;

const HeadingContentWrapper = styled.span.attrs({ role: 'text' })``;

const NextLabel = styled.span`
  ${({ service }) => service && getSansBold(service)};
  ${({ script }) => script && getPica(script)};
  color: ${C_KINGFISHER};
  display: inline-block;

  ${({ dir }) =>
    dir === 'rtl'
      ? `margin-left: ${GEL_SPACING};`
      : `margin-right: ${GEL_SPACING};`}
`;

const TitleWrapper = styled.span`
  color: ${({ titleColor }) => titleColor};
  padding: ${GEL_SPACING} 0;
  display: block;
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
`;

const SummaryWrapper = styled.p`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getBrevier(script)};
  color: ${C_METAL};
  padding-bottom: ${GEL_SPACING_DBL};
  margin: 0; /* Reset */
`;

const ButtonWrapper = styled.div`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getMinion(script)};
  padding: ${GEL_SPACING};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ durationColor }) => durationColor};
  @media screen and (-ms-high-contrast: active) {
    background-color: transparent;
  }
`;

const IconWrapper = styled.span`
  > svg {
    color: ${({ durationColor }) => durationColor};
    fill: currentColor;
    width: 1.0625rem;
    height: 0.75rem;
    margin: 0;
  }
`;

const DurationWrapper = styled.time`
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
`;

const DurationTextWrapper = styled.span.attrs({ 'aria-hidden': 'true' })``;

const programStateConfig = {
  live: {
    backgroundColor: C_POSTBOX,
    headerTextColor: C_EBON,
    titleColor: C_SHADOW,
    durationColor: C_WHITE,
  },
  next: {
    backgroundColor: C_WHITE,
    headerTextColor: C_METAL,
    titleColor: C_METAL,
    durationColor: C_KINGFISHER,
  },
  onDemand: {
    backgroundColor: C_EBON,
    headerTextColor: C_EBON,
    titleColor: C_SHADOW,
    durationColor: C_WHITE,
  },
};

const renderHeaderContent = ({
  state,
  link,
  nextLabel,
  liveLabel,
  brandTitle,
  episodeTitle,
  service,
  script,
  startTime,
  timezone,
  locale,
  dir,
}) => {
  const isLive = state === 'live';
  const isNext = state === 'next';

  const liveLabelIsEnglish = liveLabel === 'LIVE';

  const formattedStartTime = formatUnixTimestamp(
    startTime,
    'HH:mm',
    timezone,
    locale,
    false,
  );

  const content = (
    <HeadingContentWrapper>
      {isLive && (
        <LiveLabel
          service={service}
          dir={dir}
          liveText={liveLabel}
          ariaHidden={liveLabelIsEnglish}
          offScreenText={liveLabelIsEnglish ? 'Live' : null}
        />
      )}
      {isNext && (
        <NextLabel service={service} script={script} dir={dir}>
          {`${nextLabel} `}
        </NextLabel>
      )}
      {brandTitle}
      <VisuallyHiddenText>, {formattedStartTime}, </VisuallyHiddenText>
      <TitleWrapper
        service={service}
        script={script}
        {...programStateConfig[state]}
      >
        {episodeTitle}
      </TitleWrapper>
    </HeadingContentWrapper>
  );

  return state === 'next' ? content : <Link href={link}>{content}</Link>;
};

const getDurationFormat = (duration, separator = ':') => {
  const timeSections = ['mm', 'ss'];
  if (duration.includes('H')) {
    timeSections.unshift('h');
  }
  return timeSections.join(separator);
};

const ProgramCard = ({
  dir,
  service,
  script,
  brandTitle,
  summary,
  episodeTitle,
  duration,
  durationLabel,
  startTime,
  state,
  nextLabel,
  liveLabel,
  link,
  timezone,
  locale,
}) => (
  <CardWrapper>
    <TextWrapper>
      <HeadingWrapper
        service={service}
        script={script}
        {...programStateConfig[state]}
      >
        {renderHeaderContent({
          state,
          link,
          nextLabel,
          liveLabel,
          brandTitle,
          episodeTitle,
          service,
          script,
          startTime,
          timezone,
          locale,
          dir,
        })}
      </HeadingWrapper>
      {summary && (
        <SummaryWrapper service={service} script={script}>
          {summary}
        </SummaryWrapper>
      )}
    </TextWrapper>
    <ButtonWrapper
      service={service}
      script={script}
      {...programStateConfig[state]}
    >
      <IconWrapper {...programStateConfig[state]}>
        {mediaIcons.audio}
      </IconWrapper>
      <DurationWrapper dir={dir} dateTime={duration}>
        <VisuallyHiddenText>
          {` ${durationLabel} ${formatDuration(
            duration,
            getDurationFormat(duration, ','),
          )} `}
        </VisuallyHiddenText>
        <DurationTextWrapper>
          {formatDuration(duration, getDurationFormat(duration))}
        </DurationTextWrapper>
      </DurationWrapper>
    </ButtonWrapper>
  </CardWrapper>
);

const programCardPropTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  brandTitle: string.isRequired,
  episodeTitle: string.isRequired,
  link: string.isRequired,
  state: string.isRequired,
  nextLabel: string.isRequired,
  liveLabel: string.isRequired,
  startTime: number.isRequired,
  timezone: string,
  locale: string,
};

const programCardDefaultPropTypes = {
  timezone: 'Europe/London',
  locale: 'en-gb',
};

renderHeaderContent.propTypes = {
  ...programCardPropTypes,
};

renderHeaderContent.defaultProps = {
  ...programCardDefaultPropTypes,
};

ProgramCard.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  durationLabel: string.isRequired,
  duration: string.isRequired,
  summary: string,
  ...programCardPropTypes,
};

ProgramCard.defaultProps = {
  dir: 'ltr',
  summary: null,
  ...programCardDefaultPropTypes,
};

export default ProgramCard;
