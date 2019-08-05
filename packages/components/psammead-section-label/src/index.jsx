import React from 'react';
import styled, { css } from 'styled-components';
import { bool, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_QUAD } from '@bbc/gel-foundations/spacings';
import { C_PEBBLE } from '@bbc/psammead-styles/colours';

// Yes, both the linking *and non-linking* variants of the section label
// space themselves according to the minimum clickable height!
// There is more information about this decision in the README.
import { minClickableHeightPx } from './constants';
import { PlainTitle, LinkTitle } from './titles';

const barPosition = `
  // @ under 600px, place bar at top of component
  top: 0;

  // Over 600px, place at middle of clickable area
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    top: ${minClickableHeightPx / 2 / 16}rem;
  }
`;

const labelWrapperTopMargin = ({ script }) =>
  script
    ? `
        margin-top: ${GEL_SPACING_QUAD};

        ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
          margin-top: ${2 -
            (minClickableHeightPx - script.doublePica.groupD.lineHeight) /
              16}rem;
        }
      `
    : `margin-top: ${GEL_SPACING_QUAD};`;

const SectionLabelWrapper = styled.div`
  position: relative;
  ${labelWrapperTopMargin};

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

const headingSpacing = script => `
  padding: 0;
  margin: 0;

  ${MEDIA_QUERY_TYPOGRAPHY.FEATURE_PHONE_ONLY} {
    // hackery to make this component's spacing work until vertical spacing
    // moves out of psammead
    padding-top: ${1 -
      (minClickableHeightPx - script.doublePica.groupA.lineHeight) / 2 / 16}rem;
    margin-bottom: ${1 -
      (minClickableHeightPx - script.doublePica.groupA.lineHeight) / 2 / 16}rem;

  }

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    // hackery to make this component's spacing work until vertical spacing
    // moves out of psammead
    padding-top: ${1 -
      (minClickableHeightPx - script.doublePica.groupB.lineHeight) / 2 / 16}rem;
    margin-bottom: ${1 -
      (minClickableHeightPx - script.doublePica.groupB.lineHeight) / 2 / 16}rem;
  }
`;

const HeadingWithPadding = styled.h2`
  /* reset default margins */
  margin: 0;

  ${({ script }) => script && headingSpacing(script)};
`;

const SectionLabel = ({
  bar,
  children: title,
  dir,
  href,
  labelId,
  linkText,
  script,
  service,
  visuallyHidden,
}) => (
  <SectionLabelWrapper
    script={script}
    bar={bar}
    visuallyHidden={visuallyHidden}
  >
    <HeadingWithPadding script={script}>
      {linkText && href ? (
        <LinkTitle
          dir={dir}
          href={href}
          labelId={labelId}
          linkText={linkText}
          script={script}
          service={service}
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
  service: string.isRequired,
  visuallyHidden: bool,
};

export default SectionLabel;
