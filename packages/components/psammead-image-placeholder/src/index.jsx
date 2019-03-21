import styled from 'styled-components';
import { number } from 'prop-types';
import { C_CHALK } from '@bbc/psammead-styles/colours';
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

const ImagePlaceholder = styled.div`
  position: relative;
  height: ${props => props.ratio}vw;
  overflow: hidden;
  background-color: ${C_CHALK};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 30%;
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}px` : '100%')};
  max-height: ${props =>
    props.maxWidth
      ? `${Math.floor((props.maxWidth * props.ratio) / 100)}px`
      : 'none'};
  /* placeholder BBC blocks SVG */
  background-image: url(data:image/svg+xml;base64,${BBC_BLOCKS});
`;

ImagePlaceholder.propTypes = {
  ratio: number.isRequired,
};

export default ImagePlaceholder;
