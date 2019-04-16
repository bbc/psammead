import React from 'react';
import styled from 'styled-components';
import { boolean, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_CLOUD_LIGHT, C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';

const TOP_MARGIN_PX = 1;

const calcTop = ({ inline, script }) =>
  inline
    ? `
      // place at middle of text line height
      top: ${(script.doublePica.groupA.lineHeight / 2 + TOP_MARGIN_PX) / 16}rem;

      ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
        top: ${(script.doublePica.groupB.lineHeight / 2 + TOP_MARGIN_PX) /
          16}rem;
      }

      ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
        top: ${(script.doublePica.groupD.lineHeight / 2 + TOP_MARGIN_PX) /
          16}rem;
      }
    `
    : 'top: 0;';

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
    ${calcTop};
  }
`;

const SectionTitle = styled.h2`
  ${props => getDoublePica(props.script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  font-family: ${GEL_FF_REITH_SANS};
  display: inline-block;
  position: relative;
  margin: ${TOP_MARGIN_PX}px 0 0 0;

  html:not([dir='rtl']) & {
    padding-right: ${GEL_SPACING};
  }

  html[dir='rtl'] & {
    padding-left: ${GEL_SPACING};
  }
`;

SectionTitle.propTypes = {
  script: shape(scriptPropType).isRequired,
};

const SectionDivider = ({ children: text, inline, script }) => (
  // Only modify the Divider to account for an inline title if there is a title to render.
  <SectionDividerWrapper inline={inline && text} script={script}>
    {text && <SectionTitle script={script}>{text}</SectionTitle>}
  </SectionDividerWrapper>
);

SectionDivider.defaultProps = {
  children: '',
  inline: false,
};

SectionDivider.propTypes = {
  children: string,
  inline: boolean,
  script: shape(scriptPropType).isRequired,
};

export default SectionDivider;
