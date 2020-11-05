import React from 'react';
import { string } from 'prop-types';
import omit from 'ramda/src/omit';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { getMinion } from '@bbc/gel-foundations/typography';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

import { withEpisodeLocality } from './helpers';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  line-height: 0;
  margin-right: 16px;
`;

// This component only uses a subset of its props
const usedProps = ['alt', 'duration'];

// others are passed down to the underyling <img> element
const selectImgProps = omit(usedProps);

const DurationBox = withEpisodeLocality(styled.div`
  ${({ script }) => getMinion(script)};
  ${({ service }) => getSansRegular(service)}
  background-color: ${C_EBON};
  padding: 8px;
  color: white;
  line-height: 1;
  position: absolute;
  bottom: 0;
  svg {
    margin: 0 4px 2px 0;
    height: 10px;
    width: 12px;
    fill: white;
  }
`);

const StyledImage = styled.img`
  width: 230px;
`;

const EpisodeImage = props => {
  const { duration, alt } = props;
  return (
    <Wrapper>
      <StyledImage alt={alt} {...selectImgProps(props)} />
      <DurationBox>
        {mediaIcons.video}
        {duration}
      </DurationBox>
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
