import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_EBON, C_PEBBLE, C_WHITE } from '@bbc/psammead-styles/colours';

const MARGIN_TOP_PX = 1;
const MARGIN_TOP = `${MARGIN_TOP_PX / 16}rem`;

const halfLineHeightRem = group => (group.lineHeight / 2 + MARGIN_TOP_PX) / 16;

const top = script => `
  // place at middle of text line height
  top: ${halfLineHeightRem(script.doublePica.groupA)}rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    top: ${halfLineHeightRem(script.doublePica.groupB)}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${halfLineHeightRem(script.doublePica.groupD)}rem;
  }
`;

const SectionDividerWrapper = styled.div`
  position: relative;
  margin-top: ${GEL_SPACING_TRPL};
  margin-bottom: ${GEL_SPACING_DBL};

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    margin-top: ${GEL_SPACING_QUAD};
    margin-bottom: ${GEL_SPACING_TRPL};
  }
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    border: none;
    background: ${C_PEBBLE};
    left: 0;
    right: 0;
    ${({ script }) => (script ? top(script) : 'top: 0')};
  }
`;

const paddingDir = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

const SectionTitle = styled.h2`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  font-family: ${GEL_FF_REITH_SANS};
  font-weight: normal;
  display: inline-block;
  position: relative;

  /* Unset the browser's default margins. */
  margin: ${MARGIN_TOP} 0 0 0;

  ${paddingDir}: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${paddingDir}: ${GEL_SPACING_DBL};
  }
`;

SectionTitle.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: shape(scriptPropType).isRequired,
};

const SectionDivider = ({ children: text, dir, script }) => (
  // Only modify the Divider to account for an inline title if there is a title to render.
  <SectionDividerWrapper script={text && script}>
    {text && (
      <SectionTitle script={script} dir={dir}>
        {text}
      </SectionTitle>
    )}
  </SectionDividerWrapper>
);

SectionDivider.defaultProps = {
  children: null,
  dir: 'ltr',
  script: null,
};

SectionDivider.propTypes = {
  children: string,
  dir: oneOf(['ltr', 'rtl']),
  script: shape(scriptPropType),
};

export default SectionDivider;
