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
  getSerifRegular,
} from '@bbc/psammead-styles/font-styles';
import {
  getLongPrimer,
  getMinion,
  getPica,
} from '@bbc/gel-foundations/typography';
import { Link } from '@bbc/psammead-story-promo';
import { oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const CardWrapper = styled.div`
  padding-top: ${GEL_SPACING};
  background-color: ${C_WHITE};
  position: relative;
`;

const TextWrapper = styled.div`
  padding: 0 ${GEL_SPACING};
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

export const programStates = {
  live: 'live',
  next: 'next',
  onDemand: 'onDemand',
};

const programStateConfig = {
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
    headerTextColor: C_EBON,
    durationColor: C_WHITE,
  },
};

const ProgramCard = ({
  dir,
  service,
  script,
  brandTitle,
  summary,
  episodeTitle,
  duration,
  state,
  link,
}) => (
  <CardWrapper>
    <TextWrapper dir={dir}>
      <Link href={link}>
        <HeadingWrapper
          service={service}
          script={script}
          {...programStateConfig[state]}
        >
          {state !== 'onDemand' && (
            <LabelWrapper
              service={service}
              script={script}
              {...programStateConfig[state]}
            >
              {`${state} `}
            </LabelWrapper>
          )}
          {brandTitle}
        </HeadingWrapper>
      </Link>
      <TitleWrapper service={service} script={script}>
        {episodeTitle}
      </TitleWrapper>
      <SummaryWrapper service={service} script={script}>
        {summary}
      </SummaryWrapper>
    </TextWrapper>
    <ButtonWrapper
      dir={dir}
      service={service}
      script={script}
      {...programStateConfig[state]}
    >
      <IconWrapper dir={dir} {...programStateConfig[state]}>
        {mediaIcons.audio}
      </IconWrapper>
      <DurationWrapper dir={dir}>{duration}</DurationWrapper>
    </ButtonWrapper>
  </CardWrapper>
);

ProgramCard.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  brandTitle: string.isRequired,
  summary: string.isRequired,
  episodeTitle: string.isRequired,
  duration: string.isRequired,
  state: string.isRequired,
  link: string.isRequired,
};

ProgramCard.defaultProps = {
  dir: 'ltr',
};

export default ProgramCard;
