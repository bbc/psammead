import React from 'react';
import styled, { css } from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';
import { C_ORBIT_GREY, C_WHITE } from '@bbc/psammead-styles/colours';
import { FF_NEWS_SANS_REG } from '@bbc/psammead-styles/fonts';
import { GEL_BREVIER } from '@bbc/gel-foundations-styled-components/typography';
import {
  GEL_SPACING_DBL,
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-constants/spacings';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-constants/breakpoints';
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
  background-color: ${C_ORBIT_GREY};
  ${GEL_BREVIER};
  font-family: ${FF_NEWS_SANS_REG};
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
