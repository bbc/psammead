import React from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';

const StyledLink = styled.a`
  padding: ${GEL_SPACING} 0 ${GEL_SPACING};
  color: ${C_WHITE};
  font-weight: 700; /* Used instead of Reith Sans Bold since it is not worth the performance cost in this case. */
  text-decoration: none;
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
`;

const StyleLinkText = styled.span`
  ${/* sc-selector */ StyledLink}:hover &,
  ${/* sc-selector */ StyledLink}:focus & {
    padding-bottom: 1px;
    border-bottom: 2px solid ${C_WHITE};
  }
`;

const Link = ({ text, href, inline }) => (
  <StyledLink inline={inline} href={href}>
    <StyleLinkText>{text}</StyleLinkText>
  </StyledLink>
);

Link.defaultProps = {
  inline: false,
};

Link.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  inline: bool,
};

export default Link;
