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
  service: string.isRequired,
  visuallyHidden: bool,
};

export default SectionLabel;
