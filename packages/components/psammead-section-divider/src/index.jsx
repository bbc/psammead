import React from 'react';
import styled from 'styled-components';
import { boolean, shape, string } from 'prop-types';
import { scriptPropTypes } from '@bbc/gel-foundations/prop-types';
import {
  getDoublePica,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_CLOUD_LIGHT, C_EBON } from '@bbc/psammead-styles/colours';

const SectionTitle = styled.h2`
  ${props => getDoublePica(props.script)};
  color: ${C_EBON};
  font-family: ${GEL_FF_REITH_SANS};
  flex-shrink: 1;

  html:not([dir='rtl']) & {
    margin-left: 8px;
  }

  html[dir='rtl'] & {
    margin-right: 8px;
  }
`;

SectionTitle.propTypes = {
  script: shape(scriptPropTypes).isRequired,
};

const SectionRule = styled.div`
  background: ${C_CLOUD_LIGHT};
  height: 1px;
  border: none;
  flex-grow: 100;
  margin: ${({ inline }) => (inline ? 'auto 8px' : '8px')};
`;

const SectionDividerWrapper = styled.div`
  ${({ inline }) =>
    inline
      ? `
        display: flex;
        flex-direction: row-reverse;
      `
      : ''}
`;

const SectionDivider = ({ children, inline, script }) => (
  <SectionDividerWrapper inline={inline && children}>
    <SectionRule inline={inline && children} />
    {children && <SectionTitle script={script}>{children}</SectionTitle>}
  </SectionDividerWrapper>
);

SectionDivider.defaultProps = {
  children: '',
  inline: false,
};

SectionDivider.propTypes = {
  children: string,
  inline: boolean,
  script: shape(scriptPropTypes).isRequired,
};

export default SectionDivider;
