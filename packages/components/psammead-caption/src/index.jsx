import React from 'react';
import styled from 'styled-components';
import { string, element } from 'prop-types';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import {
  // GEL_LONG_PRIMER,
  GEL_FF_REITH_SANS,
  getLongPrimer,
} from '@bbc/gel-foundations/typography';
import { C_STONE, C_STORM } from '@bbc/psammead-styles/colours';

const Caption = ({ children, script }) => {
  const GEL_SCRIPT_TYPE = getLongPrimer(script);

  const StyledElement = styled.figcaption`
    ${GEL_SCRIPT_TYPE}
    background-color: ${C_STONE};
    color: ${C_STORM};
    font-family: ${GEL_FF_REITH_SANS};
    padding: ${GEL_SPACING};
    width: 100%;
    ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
      padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    }
  `;

  return <StyledElement>{children}</StyledElement>;
};

Caption.propTypes = {
  script: string,
  children: element.isRequired,
};

Caption.defaultProps = {
  script: 'news',
};

export default Caption;
