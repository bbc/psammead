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

import { withEpisodeLocality } from './helpers';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  line-height: 0;
  margin-right: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-right: ${GEL_SPACING_DBL};
  }
`;

const PlayWrapper = withEpisodeLocality(styled.div`
  background-color: ${C_EBON};
  padding: ${GEL_SPACING_HLF};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING};
  }

  svg {
    margin: 0 0 2px 0;
    height: 10px;
    width: 12px;
    fill: white;
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    position: absolute;
    bottom: 0;
  }
`);

const DurationWrapper = withEpisodeLocality(styled.label`
  ${({ script }) => getMinion(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_WHITE};
  padding-left: ${GEL_SPACING_HLF};
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
      <PlayWrapper>
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
