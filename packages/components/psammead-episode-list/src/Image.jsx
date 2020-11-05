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

import { withEpisodeLocality } from './helpers';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  line-height: 0;
  margin-right: ${GEL_SPACING_DBL};
`;

// This component only uses a subset of its props
const usedProps = ['alt', 'duration'];

// others are passed down to the underyling <img> element
const selectImgProps = omit(usedProps);

const PlayWrapper = withEpisodeLocality(styled.div`
  background-color: ${C_EBON};
  padding: ${GEL_SPACING};
  position: absolute;
  bottom: 0;
  svg {
    margin: 0 0 2px 0;
    height: 10px;
    width: 12px;
    fill: white;
  }
`);

const DurationWrapper = withEpisodeLocality(styled.label`
  ${({ script }) => getMinion(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_WHITE};
  padding-left: ${GEL_SPACING_HLF};
`);

const StyledImage = styled.img`
  width: 230px;
`;

const EpisodeImage = props => {
  const { duration, alt } = props;
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
  duration: 'string',
};

EpisodeImage.defaultProps = {
  alt: '',
  duration: '',
};

export default EpisodeImage;
