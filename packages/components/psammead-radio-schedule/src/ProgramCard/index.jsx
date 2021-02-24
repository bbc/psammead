import React from 'react';
import styled from '@emotion/styled';
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
import {
  oneOf,
  oneOfType,
  elementType,
  shape,
  string,
  number,
} from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import LiveLabel from '@bbc/psammead-live-label';
import {
  formatUnixTimestamp,
  formatDuration,
} from '@bbc/psammead-timestamp-container/utilities';
import detokenise from '@bbc/psammead-detokeniser';
import durationDictionary from '../utilities';

const TitleWrapper = styled.span`
  color: ${({ titleColor }) => titleColor};
  padding: ${GEL_SPACING} 0;
  display: inline-block;
  width: 100%;
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
`;

const StyledLink = styled(Link)`
  &:hover ${TitleWrapper} {
    text-decoration: underline;
  }

  &:focus ${TitleWrapper} {
    text-decoration: underline;
  }
`;

const CardWrapper = styled.div`
  padding-top: ${GEL_SPACING};
  background-color: ${C_WHITE};
  display: flex;
  flex-direction: column;
  outline: 0.0625rem solid transparent;
  height: 100%;
`;

const TextWrapper = styled.div`
  padding: 0 ${GEL_SPACING};
  flex-grow: 1;
`;

const StyledH3 = styled.h3`
  ${({ service }) => service && getSerifMedium(service)};
  ${({ script }) => script && getPica(script)};
  color: ${({ headerTextColor }) => headerTextColor};
  margin: 0; /* Reset */
`;

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
  outline: 0.0625rem solid transparent;
  color: ${({ durationColor }) => durationColor};
  @media screen and (-ms-high-contrast: active) {
    background-color: transparent;
    outline: none;
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
  service,
  script,
  startTime,
  timezone,
  locale,
  dir,
  linkComponent,
  linkComponentAttr,
  durationLabel,
  duration,
}) => {
  const isLive = state === 'live';
  const isNext = state === 'next';

  const liveLabelIsEnglish = liveLabel === 'LIVE';

  const formattedStartTime = formatUnixTimestamp({
    timestamp: startTime,
    format: 'HH:mm',
    timezone,
    locale,
    isRelative: false,
  });

  const episodeTitle = formatUnixTimestamp({
    timestamp: startTime,
    format: 'LL',
    timezone,
    locale,
    isRelative: false,
  });

  const screenreaderStateLabel = {
    live: 'Listen Live, ',
    next: 'Listen Next, ',
    onDemand: 'Listen, ',
  };

  const content = (
    // eslint-disable-next-line jsx-a11y/aria-role
    <span role="text">
      <VisuallyHiddenText>{screenreaderStateLabel[state]}</VisuallyHiddenText>
      {isLive && (
        <LiveLabel
          service={service}
          dir={dir}
          liveText={liveLabel}
          ariaHidden={liveLabelIsEnglish}
        />
      )}
      {isNext && (
        <NextLabel
          aria-hidden="true"
          service={service}
          script={script}
          dir={dir}
        >
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
      <VisuallyHiddenText>
        {`, ${detokenise(
          durationLabel,
          durationDictionary({ duration, locale }),
        )} `}
      </VisuallyHiddenText>
    </span>
  );

  const linkProps = { [linkComponentAttr]: link };

  return state === 'next' ? (
    content
  ) : (
    <StyledLink as={linkComponent} {...linkProps}>
      {content}
    </StyledLink>
  );
};

const ProgramCard = ({
  dir,
  service,
  script,
  brandTitle,
  summary,
  duration,
  durationLabel,
  startTime,
  state,
  nextLabel,
  liveLabel,
  link,
  timezone,
  locale,
  linkComponent,
  linkComponentAttr,
}) => (
  <CardWrapper>
    <TextWrapper>
      <StyledH3
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
          service,
          script,
          startTime,
          timezone,
          locale,
          dir,
          linkComponent,
          linkComponentAttr,
          durationLabel,
          duration,
        })}
      </StyledH3>
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
        <span aria-hidden="true">{formatDuration({ duration, locale })}</span>
      </DurationWrapper>
    </ButtonWrapper>
  </CardWrapper>
);

const programCardPropTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  brandTitle: string.isRequired,
  link: string.isRequired,
  state: string.isRequired,
  nextLabel: string.isRequired,
  liveLabel: string.isRequired,
  startTime: number.isRequired,
  timezone: string,
  locale: string,
  linkComponent: oneOfType([elementType, string]),
  linkComponentAttr: string,
};

const programCardDefaultPropTypes = {
  timezone: 'Europe/London',
  locale: 'en-gb',
  linkComponent: 'a',
  linkComponentAttr: 'href',
};

renderHeaderContent.propTypes = {
  ...programCardPropTypes,
};

renderHeaderContent.defaultProps = {
  ...programCardDefaultPropTypes,
};

ProgramCard.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  duration: string.isRequired,
  durationLabel: string.isRequired,
  summary: string,
  ...programCardPropTypes,
};

ProgramCard.defaultProps = {
  dir: 'ltr',
  summary: null,
  ...programCardDefaultPropTypes,
};

export default ProgramCard;
