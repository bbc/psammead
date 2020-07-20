import styled from 'styled-components';
import { number, bool } from 'prop-types';
import { C_CHALK, C_SHADOW } from '@bbc/psammead-styles/colours';
import { BBC_BLOCKS, BBC_BLOCKS_DARK_MODE } from '@bbc/psammead-assets/svgs';

const ImagePlaceholder = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  background-color:  ${({ darkMode }) => (darkMode ? C_SHADOW : C_CHALK)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 30%;
  padding-bottom: ${props => props.ratio}%;
  width: 100%;
  background-image: url(data:image/svg+xml;base64,${`${({ darkMode }) =>
    darkMode ? BBC_BLOCKS_DARK_MODE : BBC_BLOCKS}`}
  );
`;

ImagePlaceholder.propTypes = {
  ratio: number.isRequired,
  darkMode: bool,
};

ImagePlaceholder.defaultProps = {
  darkMode: false,
};

export default ImagePlaceholder;
