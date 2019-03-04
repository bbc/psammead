import React from 'react';
import styled, { css } from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_BREVIER, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING_DBL,
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import Link from './Link';
import List from './List';

export const layoutWrapperWithoutGrid = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const SitewideLinksWrapper = styled.div`
  ${layoutWrapperWithoutGrid};
  background-color: ${C_EBON};
  ${GEL_BREVIER};
  font-family: ${GEL_FF_REITH_SANS};
`;

const StyledParagraph = styled.p`
  color: ${C_WHITE};
  margin: 0;
  padding: ${GEL_SPACING_DBL} 0;
`;

const SitewideLinks = ({ links, copyrightText, externalLink }) => (
  <SitewideLinksWrapper>
    <List links={links} />
    <StyledParagraph>
      {copyrightText}
      <Link text={externalLink.text} href={externalLink.href} inline />
    </StyledParagraph>
  </SitewideLinksWrapper>
);

const linkPropTypes = shape({
  href: string.isRequired,
  text: string.isRequired,
});

SitewideLinks.propTypes = {
  links: arrayOf(linkPropTypes.isRequired).isRequired,
  copyrightText: string.isRequired,
  externalLink: linkPropTypes.isRequired,
};

export default SitewideLinks;
