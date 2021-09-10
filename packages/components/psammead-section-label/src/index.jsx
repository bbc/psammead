import React from 'react';
import styled from '@emotion/styled';
import { bool, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { C_PEBBLE, C_GHOST, C_SHADOW } from '@bbc/psammead-styles/colours';
import { PlainTitle, LinkTitle } from './titles';

const Bar = styled.div`
  border-top: 0.0625rem solid ${C_PEBBLE};
  z-index: -1;

  @media screen and (-ms-high-contrast: active) {
    border-color: windowText;
  }
`;

const DesktopBar = styled(Bar)`
  display: none;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: block;
    position: absolute;
    left: 0;
    right: 0;

    /* Placing bar at the vertical midpoint of the section title */
    top: ${({ script }) => 0.5 + script.doublePica.groupD.lineHeight / 32}rem;
  }
`;

const MobileBar = styled(Bar)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const SectionLabelWrapper = styled.div`
  position: relative;
  z-index: 0;
  color: ${C_SHADOW};

  margin-top: ${GEL_SPACING_QUAD};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_TRPL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin-bottom: ${GEL_SPACING_TRPL};
  }

  ${({ visuallyHidden }) =>
    visuallyHidden &&
    `
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      width: 1px;
    `}
`;

SectionLabelWrapper.propTypes = {
  visuallyHidden: bool.isRequired,
};

const Heading = styled.h2`
  /* reset default margins */
  margin: 0;
  padding: 0;
`;

const SectionLabel = ({
  bar,
  mobileDivider,
  children: title,
  dir,
  href,
  id,
  labelId,
  linkText,
  script,
  service,
  visuallyHidden,
  backgroundColor,
  overrideHeadingAs,
  ...props
}) => (
  <SectionLabelWrapper visuallyHidden={visuallyHidden} {...props}>
    {bar && <DesktopBar script={script} />}
    {mobileDivider && <MobileBar />}
    <Heading as={overrideHeadingAs}>
      {linkText && href ? (
        <LinkTitle
          dir={dir}
          href={href}
          id={id}
          labelId={labelId}
          linkText={linkText}
          script={script}
          service={service}
          backgroundColor={backgroundColor}
        >
          {title}
        </LinkTitle>
      ) : (
        <PlainTitle
          dir={dir}
          labelId={labelId}
          script={script}
          service={service}
          backgroundColor={backgroundColor}
        >
          {title}
        </PlainTitle>
      )}
    </Heading>
  </SectionLabelWrapper>
);

SectionLabel.defaultProps = {
  bar: true,
  mobileDivider: true,
  dir: 'ltr',
  href: null,
  linkText: null,
  id: '',
  labelId: '',
  visuallyHidden: false,
  backgroundColor: C_GHOST,
  overrideHeadingAs: null,
};

SectionLabel.propTypes = {
  bar: bool,
  mobileDivider: bool,
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  href: string,
  id: string,
  labelId: string,
  linkText: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  visuallyHidden: bool,
  backgroundColor: string,
  overrideHeadingAs: oneOf([null, 'strong']),
};

export default SectionLabel;
