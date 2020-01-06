import React from 'react';
import { shape, string, oneOf, node } from 'prop-types';
import styled from 'styled-components';
import { getDoublePica } from '@bbc/gel-foundations/typography';
import Grid from '@bbc/psammead-grid';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';

// This is to handle the padding between the rank and the link for both ltr and rtl stories.
const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

// This is to make where the link ends consistent for both columns
const paddingEnd = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}

  color: ${C_EBON};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledItem = styled.div`
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: ${GEL_SPACING_DBL};
  ${paddingEnd}: ${GEL_SPACING_DBL};

  @supports (${grid}) {
    ${paddingEnd}: 0;
  }
`;

export const MostReadLink = ({
  dir,
  service,
  script,
  title,
  href,
  children,
}) => (
  <StyledItem dir={dir}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {children}
  </StyledItem>
);

MostReadLink.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  title: string.isRequired,
  href: string.isRequired,
  children: node, // this node will be a timestamp container
};

MostReadLink.defaultProps = {
  dir: 'ltr',
  children: null,
};

const MostReadItemProps = {
  item: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 3,
    group3: 3,
    group4: 4,
    group5: 4,
  },
};

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const MostReadItemWrapper = ({ dir, children }) => (
  <Grid {...MostReadItemProps} dir={dir} forwardedAs="li">
    <StyledLi>{children}</StyledLi>
  </Grid>
);

MostReadItemWrapper.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  children: node.isRequired,
};

MostReadItemWrapper.defaultProps = {
  dir: 'ltr',
};
