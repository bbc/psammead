import React from 'react';
import styled from 'styled-components';
import { boolean, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_CLOUD_LIGHT, C_EBON } from '@bbc/psammead-styles/colours';

const calcTop = ({ inline, script }) =>
  inline
    ? `
      top: ${script.doublePica.groupA.lineHeight / 2}px;

      ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
        top: ${script.doublePica.groupB.lineHeight / 2}px;
      }

      ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
        top: ${script.doublePica.groupD.lineHeight / 2}px;
      }`
    : 'top: 0px;';

const SectionDividerOuterWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    border: none;
    background: ${C_CLOUD_LIGHT};
    left: 0px;
    right: 0px;
    ${calcTop};
  }
`;

const SectionDividerInnerWrapper = styled.div`
  position: relative;
  display: inline;
  background-color: #fff;
  html:not([dir='rtl']) & {
    padding-right: 8px;
  }
  html[dir='rtl'] & {
    padding-left: 8px;
  }
`;

const SectionTitle = styled.h2`
  ${props => getDoublePica(props.script)};
  color: ${C_EBON};
  font-family: ${GEL_FF_REITH_SANS};
  display: inline-block;
  margin-top: 0px;
`;

SectionTitle.propTypes = {
  script: shape(scriptPropType).isRequired,
};

const SectionDivider = ({ children, inline, script }) => (
  // Only modify the Divider to account for an inline title if there is a title to render.
  <SectionDividerOuterWrapper inline={inline && children} script={script}>
    <SectionDividerInnerWrapper inline={inline && children}>
      {children && <SectionTitle script={script}>{children}</SectionTitle>}
    </SectionDividerInnerWrapper>
  </SectionDividerOuterWrapper>
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
