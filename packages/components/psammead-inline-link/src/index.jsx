import styled from 'styled-components';
import { C_POSTBOX, C_CLOUD_DARK, C_WHITE } from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_POSTBOX};
  border-bottom: 1px solid ${C_POSTBOX};
  white-space: pre-wrap; // needed so words on the end of sentences, especially italics, don't cut off background-color
  padding: 0 2px 1px; // increases highlight start and end of the link plus increases click error
  margin: 0 -2px -1px; // offset the padding so there is no additional spacing between words
  text-decoration: none;

  &:visited {
    color: ${C_CLOUD_DARK};
    border-bottom: 1px solid ${C_CLOUD_DARK};
  }

  &:focus,
  &:hover {
    color: ${C_WHITE};
    background-color: ${C_POSTBOX};
    border-bottom: 0; // could remove this and the visual experience would feel less jumpy, currently the eye notices a bounce IMO
    @supports (transition) {
      transition: all 1s ease; // speak with Natalie as the direct swap in colour and background is gross. maybe change designs
    }
  }
`;

export default InlineLink;
