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
  top: 0;

  // place at middle of text line height
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    // top: ${halfLineHeightRem(script.doublePica.groupD)}rem;
    top: ${22 / 16}rem;
  }
`;

const SectionLabelWrapper = styled.div`
  margin-top: ${GEL_SPACING_QUAD};
  // margin-bottom: ${GEL_SPACING_TRPL};
  position: relative;

  ${({ bar }) =>
    bar &&
    css`
      &::before {
        content: '';
        position: absolute;
        border-top: 0.0625rem solid ${C_PEBBLE};
        left: 0;
        right: 0;
        ${({ script }) => (script ? top(script) : `top: 0`)};
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

SectionLabelWrapper.propTypes = {
  bar: bool.isRequired,
  script: shape(scriptPropType).isRequired,
  visuallyHidden: bool.isRequired,
};

const paddingDir = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

const Title = styled.span`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${({ service }) => getSansRegular(service)}
  display: inline-block;
  z-index: 1;

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
const halfLineHeightDiff = (a, b) => lineHeightDiff(a, b) / 2;

const seeMoreTop = script => `
  top: ${1 +
    lineHeightDiff(script.doublePica.groupA, script.brevier.groupA)}rem;

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    top: ${1 +
      lineHeightDiff(script.doublePica.groupB, script.brevier.groupB)}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${halfLineHeightDiff(script.doublePica.groupD, script.brevier.groupD) +
      0.625}rem;
  }
`;

const BlockLink = styled.a.attrs(props => ({
  'aria-labelledby': props.labelId,
}))`
  text-decoration: none;
`;

const ohGodWhyPadding = script => `
  ${MEDIA_QUERY_TYPOGRAPHY.FEATURE_PHONE_ONLY} {
    padding-top: ${1 - (44 - script.doublePica.groupA.lineHeight) / 2 / 16}rem;
    padding-bottom: ${1 -
      (44 - script.doublePica.groupA.lineHeight) / 2 / 16}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    padding-top: ${1 - (44 - script.doublePica.groupB.lineHeight) / 2 / 16}rem;
    padding-bottom: ${1 -
      (44 - script.doublePica.groupB.lineHeight) / 2 / 16}rem;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: 0;
  }
`;

const HeadingWithPadding = styled.h2`
  /* reset default margins */
  margin: 0;

  ${({ script }) => ohGodWhyPadding(script)};
`;

const FlexContainer = styled.span.attrs({
  role: 'text',
})`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  min-height: 44px;
`;

// eslint-disable-next-line react/prop-types
const PlainTitle = ({ labelId, children: title, dir, script, service }) => (
  <FlexContainer>
    <Title script={script} dir={dir} id={labelId} service={service}>
      {title}
    </Title>
  </FlexContainer>
);

/* eslint-disable react/prop-types */
const LinkTitle = ({
  href,
  labelId,
  children,
  dir,
  linkText,
  script,
  service,
}) => (
  /* eslint-enable react/prop-types */
  <BlockLink href={href} labelId={labelId}>
    {/* eslint-disable-next-line jsx-a11y/aria-role */}
    <FlexContainer>
      <Title id={labelId} dir={dir} script={script} service={service}>
        {children}
      </Title>
      <IndexLinkCta script={script} service={service}>
        {linkText}
      </IndexLinkCta>
    </FlexContainer>
  </BlockLink>
);

const IndexLinkCta = styled.span.attrs({
  'aria-hidden': 'true',
})`
  ${({ script }) => script && getBrevier(script)};
  ${({ service }) => getSansBold(service)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  padding-left: 1rem;
  z-index: 1;
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
  <SectionLabelWrapper
    script={script}
    bar={bar}
    visuallyHidden={visuallyHidden}
  >
    <HeadingWithPadding script={script}>
      {linkText && href ? (
        <LinkTitle
          script={script}
          dir={dir}
          labelId={labelId}
          service={service}
          href={href}
          linkText={linkText}
        >
          {title}
        </LinkTitle>
      ) : (
        <PlainTitle script={script} dir={dir} id={labelId} service={service}>
          {title}
        </PlainTitle>
      )}
    </HeadingWithPadding>
  </SectionLabelWrapper>
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
