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
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { getBrevier, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_PEBBLE, C_WHITE } from '@bbc/psammead-styles/colours';
import { getSansBold, getSansRegular } from '@bbc/psammead-styles/font-styles';

const minClickableHeightPx = 44;
const minClickableHeightRem = minClickableHeightPx / 16;

const barPosition = `
  // @ under 600px, place bar at top of component
  top: 0;

  // Over 600px, place at middle of clickable area
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${minClickableHeightPx / 2 / 16}rem;
  }
`;

const SectionLabelWrapper = styled.div`
  margin-top: ${GEL_SPACING_QUAD};
  position: relative;

  ${({ bar }) =>
    bar &&
    css`
      &::before {
        ${barPosition};
        content: '';
        position: absolute;
        border-top: 0.0625rem solid ${C_PEBBLE};
        left: 0;
        right: 0;
        @media screen and (-ms-high-contrast: active) {
          border-color: windowText;
        }
      }
    `}

  ${({ visuallyHidden }) =>
    visuallyHidden &&
    css`
      // Hide when under 600px
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

const paddingDir = ({ dir }) => `padding-${dir === 'rtl' ? 'left' : 'right'}`;
const paddingReverseDir = ({ dir }) =>
  `padding-${dir === 'rtl' ? 'right' : 'left'}`;

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

const SectionLabelLink = styled.a.attrs(props => ({
  'aria-labelledby': props.labelId,
}))`
  color: ${C_EBON};
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const headingPadding = script => `
  ${MEDIA_QUERY_TYPOGRAPHY.FEATURE_PHONE_ONLY} {
    // yeah this is really gross but prettier demands it :shrug:
    padding: ${1 -
      (minClickableHeightPx - script.doublePica.groupA.lineHeight) /
        2 /
        16}rem 0;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    padding: ${1 -
      (minClickableHeightPx - script.doublePica.groupB.lineHeight) /
        2 /
        16}rem 0;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: 0;
  }
`;

const HeadingWithPadding = styled.h2`
  /* reset default margins */
  margin: 0;

  ${({ script }) => script && headingPadding(script)};
`;

const FlexContainer = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  min-height: ${minClickableHeightRem}rem;
`;

const FlexTextContainer = styled(FlexContainer).attrs({
  role: 'text',
})``;

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
  /* eslint-enable react/prop-types */
}) => (
  <SectionLabelLink href={href} labelId={labelId}>
    <FlexTextContainer>
      <Title id={labelId} dir={dir} script={script} service={service}>
        {children}
      </Title>
      <IndexLinkCta dir={dir} script={script} service={service}>
        {linkText}
      </IndexLinkCta>
    </FlexTextContainer>
  </SectionLabelLink>
);

const IndexLinkCta = styled.span.attrs({
  'aria-hidden': 'true',
})`
  ${({ script }) => script && getBrevier(script)};
  ${({ service }) => getSansBold(service)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${paddingReverseDir}: ${GEL_SPACING_DBL};
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
