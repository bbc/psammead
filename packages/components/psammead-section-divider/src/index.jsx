import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN, // 600px
  GEL_GROUP_5_SCREEN_WIDTH_MIN, // 1280px
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING, // 8px
  GEL_SPACING_DBL, // 16px
} from '@bbc/gel-foundations/spacings';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import {
  C_CLOUD_LIGHT, // #BABABA
  C_EBON, // #222222
  C_WHITE, // #FFFFFF
} from '@bbc/psammead-styles/colours';

const MARGIN_TOP_REM = 1.25;

const halfLineHeightRem = group => group.lineHeight / 2 / 16 + MARGIN_TOP_REM;

const top = script => `
  // place at middle of text line height
  top: ${halfLineHeightRem(script.doublePica.groupA)}rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    top: ${halfLineHeightRem(script.doublePica.groupB)}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${halfLineHeightRem(script.doublePica.groupD)}rem;
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    top: 0;
  }
`;

const SectionDividerWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    border: none;
    background: ${C_CLOUD_LIGHT};
    left: 0;
    right: 0;
    ${({ script }) => (script ? top(script) : 'top: 0')};
  }
`;

const SectionTitle = styled.h2`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  font-family: ${GEL_FF_REITH_SANS};
  display: inline-block;
  position: relative;
  margin: ${MARGIN_TOP_REM}rem 0 0 0;

  html:not([dir='rtl']) & {
    padding-right: ${GEL_SPACING};
  }

  html[dir='rtl'] & {
    padding-left: ${GEL_SPACING};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    html:not([dir='rtl']) & {
      padding-right: ${GEL_SPACING_DBL};
    }

    html[dir='rtl'] & {
      padding-left: ${GEL_SPACING_DBL};
    }
  }
`;

SectionTitle.propTypes = {
  script: shape(scriptPropType).isRequired,
};

const SectionDivider = ({ children: text, script }) => (
  // Only modify the Divider to account for an inline title if there is a title to render.
  <SectionDividerWrapper script={text && script}>
    {text && <SectionTitle script={script}>{text}</SectionTitle>}
  </SectionDividerWrapper>
);

SectionDivider.defaultProps = {
  children: '',
};

SectionDivider.propTypes = {
  children: string,
  script: shape(scriptPropType).isRequired,
};

export default SectionDivider;
