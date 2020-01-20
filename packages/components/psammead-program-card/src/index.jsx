import React from 'react';
import styled from 'styled-components';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import Paragraph from '@bbc/psammead-paragraph';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_EBON,
  C_METAL,
  C_SHADOW,
  C_WHITE,
  C_POSTBOX,
  C_KINGFISHER,
} from '@bbc/psammead-styles/colours';
import {
  getSansRegular,
  getSerifRegular,
  getSansBold,
} from '@bbc/psammead-styles/font-styles';
import {
  getLongPrimer,
  getMinion,
  getPica,
} from '@bbc/gel-foundations/typography';
import { Link } from '@bbc/psammead-story-promo';

const programStateColors = {
  live: {
    backgroundColor: C_POSTBOX,
    headerLabelColor: C_POSTBOX,
    headerTextColor: C_EBON,
    durationColor: C_WHITE,
  },
  next: {
    backgroundColor: C_WHITE,
    headerLabelColor: C_KINGFISHER,
    headerTextColor: C_METAL,
    durationColor: C_KINGFISHER,
  },
  onDemand: {
    backgroundColor: C_EBON,
    headerLabelColor: '',
    headerTextColor: C_EBON,
    durationColor: C_WHITE,
  },
};

const CardWrapper = styled.div`
  padding-top: ${GEL_SPACING};
  background-color: ${C_WHITE};
  position: relative;
`;

const TextWrapper = styled.div`
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
`;

const HeadingWrapper = styled.h3`
  ${({ service }) => service && getSerifRegular(service)};
  ${({ script }) => script && getPica(script)};
  color: ${({ headerTextColor }) => headerTextColor};
  margin: 0; /* Reset */
`;

const LabelWrapper = styled.span`
  ${({ service }) => service && getSansBold(service)};
  ${({ script }) => script && getPica(script)};
  text-transform: uppercase;
  color: ${({ headerLabelColor }) => headerLabelColor};
`;

const TitleWrapper = styled.div`
  color: ${C_SHADOW};
  padding: ${GEL_SPACING} 0;
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
`;

const SummaryWrapper = styled(Paragraph)`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getLongPrimer(script)};
  color: ${C_METAL};
  padding-bottom: ${GEL_SPACING_DBL};
`;

const ButtonWrapper = styled.div`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getMinion(script)};
  padding: ${GEL_SPACING} 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ durationColor }) => durationColor};
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
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

const DurationWrapper = styled.span`
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
`;

const ProgramCard = ({
  dir,
  service,
  script,
  heading,
  summary,
  date,
  duration,
  state,
  ctaLink,
}) => (
  <CardWrapper>
    <TextWrapper dir={dir}>
      <Link href={ctaLink}>
        <HeadingWrapper
          service={service}
          script={script}
          {...programStateColors[state]}
        >
          {state !== 'onDemand' && (
            <LabelWrapper
              service={service}
              script={script}
              {...programStateColors[state]}
            >
              {`${state} `}
            </LabelWrapper>
          )}
          {heading}
        </HeadingWrapper>
      </Link>
      <TitleWrapper service={service} script={script}>
        {date}
      </TitleWrapper>
      <SummaryWrapper service={service} script={script}>
        {summary}
      </SummaryWrapper>
    </TextWrapper>
    <ButtonWrapper
      dir={dir}
      service={service}
      script={script}
      {...programStateColors[state]}
    >
      <IconWrapper dir={dir} {...programStateColors[state]}>
        {mediaIcons.audio}
      </IconWrapper>
      <DurationWrapper dir={dir}>{duration}</DurationWrapper>
    </ButtonWrapper>
  </CardWrapper>
);

export default ProgramCard;
