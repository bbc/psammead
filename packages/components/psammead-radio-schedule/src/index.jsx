import React from 'react';
import styled from 'styled-components';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_EBON,
  C_METAL,
  C_SHADOW,
  C_WHITE,
} from '@bbc/psammead-styles/colours';
import {
  getSansRegular,
  getSerifRegular,
} from '@bbc/psammead-styles/font-styles';
import {
  getLongPrimer,
  getMinion,
  getPica,
} from '@bbc/gel-foundations/typography';

const RadioWrapper = styled.div`
  background-color: ${C_WHITE};
  width: 14.5rem;
`;

const TextWrapper = styled.div`
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
`;

const HeadingWrapper = styled.div`
  ${({ service }) => service && getSerifRegular(service)};
  ${({ script }) => script && getPica(script)};
  color: ${C_EBON};
`;

const DateWrapper = styled.div`
  color: ${C_SHADOW};
  padding: ${GEL_SPACING} 0;
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
`;

const SummaryWrapper = styled.div`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getLongPrimer(script)};
  color: ${C_METAL};
  padding-bottom: ${GEL_SPACING_DBL};
`;

const ButtonWrapper = styled.div`
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getMinion(script)};
  background-color: ${C_EBON};
  padding: ${GEL_SPACING} 0;
  color: ${C_WHITE};
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-left: ${GEL_SPACING};`
      : `padding-right: ${GEL_SPACING};`}
`;

const IconWrapper = styled.span`
  > svg {
    color: ${C_WHITE};
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

const RadioSchedule = ({
  dir,
  service,
  script,
  heading,
  summary,
  date,
  duration,
}) => (
  <RadioWrapper>
    <TextWrapper dir={dir}>
      <HeadingWrapper service={service} script={script}>
        {heading}
      </HeadingWrapper>
      <DateWrapper service={service} script={script}>
        {date}
      </DateWrapper>
      <SummaryWrapper service={service} script={script}>
        {summary}
      </SummaryWrapper>
    </TextWrapper>
    <ButtonWrapper dir={dir} service={service} script={script}>
      <IconWrapper dir={dir}>{mediaIcons.audio}</IconWrapper>
      <DurationWrapper dir={dir}>{duration}</DurationWrapper>
    </ButtonWrapper>
  </RadioWrapper>
);

export default RadioSchedule;
