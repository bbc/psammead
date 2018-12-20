import styled from 'styled-components';
import { number, oneOfType, string } from 'prop-types';

const Image = styled.img`
  display: block;
  width: 100%;
`;

Image.propTypes = {
  alt: string.isRequired,
  height: oneOfType([string, number]),
  src: string.isRequired,
  width: oneOfType([string, number]).isRequired,
};

export default Image;
