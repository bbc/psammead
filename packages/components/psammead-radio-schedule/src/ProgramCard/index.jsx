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
  getLongPrimer,
  getMinion,
  getPica,
} from '@bbc/gel-foundations/typography';
import { Link } from '@bbc/psammead-story-promo';
import { oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const CardWrapper = styled.div`
  padding-top: ${GEL_SPACING};
  background-color: ${C_WHITE};
  position: relative;
  border: 0.0625rem solid transparent;
`;

const TextWrapper = styled.div`
  padding: 0 ${GEL_SPACING};
`;

const HeadingWrapper = styled.h3`
  ${({ service }) => service && getSerifMedium(service)};
  ${({ script }) => script && getPica(script)};
  color: ${({ headerTextColor }) => headerTextColor};
  margin: 0; /* Reset */
`;

const HeadingContentWrapper = styled.span.attrs({ role: 'text' })``;

const StyledSpan = styled.span``;

const LabelWrapper = styled.span.attrs({ 'aria-hidden': 'true' })`
  ${({ service }) => service && getSansBold(service)};
  ${({ script }) => script && getPica(script)};
  color: ${({ headerLabelColor }) => headerLabelColor};
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
  ${({ script }) => script && getLongPrimer(script)};
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
  border-top: 1px solid transparent;
`;

const IconWrapper = styled.span`
  > svg {
    color: ${({ durationColor }) => durationColor};
    fill: currentColor;
    width: 1.0625rem;
    height: ${GEL_SPACING_DBL};
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
    headerLabelColor: C_POSTBOX,
    headerTextColor: C_EBON,
    titleColor: C_SHADOW,
    durationColor: C_WHITE,
  },
  next: {
    backgroundColor: C_WHITE,
    headerLabelColor: C_KINGFISHER,
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

const sentenceCase = text =>
  text
    .toLowerCase()
    .charAt(0)
    .toUpperCase() + text.substring(1);

const renderHeaderContent = ({
  state,
  link,
  stateLabel,
  brandTitle,
  episodeTitle,
  service,
  script,
  startTime,
}) => {
  const isOnDemand = state === 'onDemand';
  const isLive = state === 'live';
  const hiddenTextProps =
    stateLabel.toLowerCase() === 'live' ? { lang: 'en-GB' } : {};

  const content = (
    <HeadingContentWrapper>
      {!isOnDemand && (
        <LabelWrapper
          service={service}
          script={script}
          {...programStateConfig[state]}
        >
          {`${stateLabel.toUpperCase()} `}
        </LabelWrapper>
      )}
      {isLive && (
        <VisuallyHiddenText {...hiddenTextProps}>
          {`${sentenceCase(stateLabel)}, `}
        </VisuallyHiddenText>
      )}
      <StyledSpan>{brandTitle}</StyledSpan>
      <VisuallyHiddenText>, {startTime}, </VisuallyHiddenText>
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
  stateLabel,
  link,
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
          stateLabel,
          brandTitle,
          episodeTitle,
          service,
          script,
          startTime,
        })}
      </HeadingWrapper>
      <SummaryWrapper service={service} script={script}>
        {summary}
      </SummaryWrapper>
    </TextWrapper>
    <ButtonWrapper
      service={service}
      script={script}
      {...programStateConfig[state]}
    >
      <IconWrapper {...programStateConfig[state]}>
        {mediaIcons.audio}
      </IconWrapper>
      <DurationWrapper dir={dir}>
        <VisuallyHiddenText>
          {` ${sentenceCase(durationLabel)} ${duration.replace(/:/g, ',')} `}
        </VisuallyHiddenText>
        <DurationTextWrapper>{duration}</DurationTextWrapper>
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
  stateLabel: string.isRequired,
  startTime: string.isRequired,
};

renderHeaderContent.propTypes = {
  ...programCardPropTypes,
};

ProgramCard.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  durationLabel: string.isRequired,
  duration: string.isRequired,
  summary: string.isRequired,
  ...programCardPropTypes,
};

ProgramCard.defaultProps = {
  dir: 'ltr',
};

export default ProgramCard;
