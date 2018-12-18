import styled from 'styled-components';
import { number } from 'prop-types';
import { C_CHALK } from '@bbc/psammead-styles/colours';
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

const ImagePlaceholder = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  background-color: ${C_CHALK};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 30%;
  padding-bottom: ${props => props.ratio}%;
  width: 100%;
  /* placeholder BBC blocks SVG */
  background-image: url(data:image/svg+xml;base64,${BBC_BLOCKS});
`;

ImagePlaceholder.propTypes = {
  ratio: number.isRequired,
};

export default ImagePlaceholder;
