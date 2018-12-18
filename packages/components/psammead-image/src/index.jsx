import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  display: block;
  width: 100%;
`;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Image;
