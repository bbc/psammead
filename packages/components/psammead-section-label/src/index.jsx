import React from 'react';
import styled, { css } from 'styled-components';
import { bool, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { getBrevier, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_PEBBLE, C_WHITE } from '@bbc/psammead-styles/colours';
import { getSansBold, getSansRegular } from '@bbc/psammead-styles/font-styles';

const halfLineHeightRem = group => group.lineHeight / 2 / 16;

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

const Wrapper = styled.div`
  position: relative;
  margin-top: ${GEL_SPACING_TRPL};
  margin-bottom: ${GEL_SPACING_DBL};

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    margin-top: ${GEL_SPACING_QUAD};
    margin-bottom: ${GEL_SPACING_TRPL};
  }

  ${({ bar }) =>
    bar &&
    css`
      &::before {
        content: '';
        position: absolute;
        border-top: 0.0625rem solid ${C_PEBBLE};
        left: 0;
        right: 0;
        ${({ script }) => (script ? top(script) : 'top: 0')};
        @media screen and (-ms-high-contrast: active) {
          border-color: windowText;
        }
      }
    `}

  ${({ visuallyHidden }) =>
    visuallyHidden &&
    css`
      @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
        clip-path: inset(100%);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        width: 1px;
      }
    `}
`;

Wrapper.propTypes = {
  bar: bool.isRequired,
  script: shape(scriptPropType).isRequired,
  visuallyHidden: bool.isRequired,
};

const paddingDir = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

const Title = styled.h2`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${({ service }) => getSansRegular(service)}
  display: inline-block;
  position: relative;

  /* Unset the browser's default margins. */
  margin: 0;

  ${paddingDir}: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${paddingDir}: ${GEL_SPACING_DBL};
  }
`;

Title.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

const lineHeightDiff = (a, b) => (a.lineHeight - b.lineHeight) / 16;

const seeMoreTop = script => `
  // place at middle of text line height
  top: ${lineHeightDiff(script.doublePica.groupA, script.brevier.groupA)}rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    top: ${lineHeightDiff(script.doublePica.groupB, script.brevier.groupB)}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${lineHeightDiff(script.doublePica.groupD, script.brevier.groupD)}rem;
  }
`;

const SeeMore = styled.div.attrs({
  'aria-hidden': 'true',
})`
  ${({ script }) => script && getBrevier(script)};
  ${({ service }) => getSansBold(service)};
  display: inline-block;
  position: absolute;
  right: 0;
  background-color: ${C_WHITE};
  padding-left: 1rem;
  ${({ script }) => (script ? seeMoreTop(script) : 'top: 0')};
`;

const SectionLabel = ({
  bar,
  children: title,
  dir,
  href,
  labelId,
  linkText,
  script,
  visuallyHidden,
  service,
}) => (
  <Wrapper script={script} bar={bar} visuallyHidden={visuallyHidden}>
    <Title script={script} dir={dir} id={labelId} service={service}>
      {title}
    </Title>
    {linkText && href && (
      <SeeMore script={script} service={service}>
        {linkText}
      </SeeMore>
    )}
  </Wrapper>
);

SectionLabel.defaultProps = {
  bar: true,
  dir: 'ltr',
  href: null,
  linkText: null,
  visuallyHidden: false,
};

SectionLabel.propTypes = {
  bar: bool,
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  href: string,
  labelId: string.isRequired,
  linkText: string,
  script: shape(scriptPropType).isRequired,
  visuallyHidden: bool,
  service: string.isRequired,
};

export default SectionLabel;
