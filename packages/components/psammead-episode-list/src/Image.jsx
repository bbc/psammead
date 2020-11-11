import React from 'react';
import { string } from 'prop-types';
import omit from 'ramda/src/omit';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { getMinion } from '@bbc/gel-foundations/typography';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import { withEpisodeContext } from './helpers';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  line-height: 0;
  margin: 0 ${GEL_SPACING} 0 0;
  :dir(rtl) {
    margin: 0 0 0 ${GEL_SPACING};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin: 0 ${GEL_SPACING_DBL} 0 0;
    :dir(rtl) {
      margin: 0 0 0 ${GEL_SPACING_DBL};
    }
  }
`;

const PlayWrapper = withEpisodeContext(styled.div`
  background-color: ${C_EBON};
  padding: ${GEL_SPACING_HLF};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING};
  }

  svg {
    margin: 0 0 1px 0;
    height: 0.6rem;
    width: 0.7rem;
    color: ${C_WHITE};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    position: absolute;
    bottom: 0;
  }
`);

const DurationWrapper = withEpisodeContext(styled.span`
  ${({ script }) => getMinion(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_WHITE};
  padding: 0 0 0 ${GEL_SPACING_HLF};
  :dir(rtl) {
    padding: 0 ${GEL_SPACING_HLF} 0 0;
  }
`);

const StyledImage = styled.img`
  width: 70px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    width: 120px;
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 230px;
  }
`;

const EpisodeImage = props => {
  const { duration, alt } = props;

  // This component only uses a subset of its props
  // the remaining props are passed down to the underyling <img> element
  const selectImgProps = omit(['alt', 'duration']);

  return (
    <Wrapper>
      <StyledImage alt={alt} {...selectImgProps(props)} />
      <PlayWrapper aria-hidden="true">
        {mediaIcons.video}
        {duration && <DurationWrapper>{duration}</DurationWrapper>}
      </PlayWrapper>
    </Wrapper>
  );
};

EpisodeImage.propTypes = {
  alt: string,
  duration: string,
};

EpisodeImage.defaultProps = {
  alt: '',
  duration: '',
};

export default EpisodeImage;
