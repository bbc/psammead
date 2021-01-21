import React from 'react';
import { string, element, bool, oneOf, shape } from 'prop-types';
import styled from '@emotion/styled';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  C_CONSENT_BACKGROUND,
  C_CONSENT_ACTION,
  C_CONSENT_CONTENT,
  C_CONSENT_FOCUS,
  C_WHITE,
  C_PEBBLE,
  C_EBON,
  C_GHOST,
} from '@bbc/psammead-styles/colours';
import {
  getDoublePica,
  getLongPrimer,
  getBodyCopy,
} from '@bbc/gel-foundations/typography';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const hoverFocusStyles = `
  &:focus {
    outline: none;
    box-shadow: 0rem 0rem 0.0625rem 0.1875rem ${C_CONSENT_FOCUS};
  }
  &:focus,
  &:hover {
    color: ${C_EBON};
    background-color: ${C_CONSENT_ACTION};
  }
`;

const Wrapper = styled.div`
  ${({ service }) => getSansRegular(service)}
  background-color: ${C_CONSENT_BACKGROUND};
  padding: ${GEL_SPACING_DBL} ${GEL_MARGIN_BELOW_400PX};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_MARGIN_ABOVE_400PX};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING_QUAD};
    padding-bottom: ${GEL_SPACING_QUAD};
  }
`;

const CenterWrapper = styled.div`
  max-width: 36.25rem;
  margin: 0 auto;

  a {
    color: ${C_CONSENT_ACTION};
    text-decoration: none;
    border-bottom: solid 1px ${C_PEBBLE};

    ${hoverFocusStyles}
  }
`;

const Title = styled.h2`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_WHITE};
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

/*
 * The '& li + li' below allows for styling every `li` element except the first.
 */
const Options = styled.ul`
  ${({ script }) => script && getLongPrimer(script)};
  display: flex;
  flex-direction: row;
  color: ${C_CONSENT_ACTION};
  font-weight: 600;
  padding: 0;
  margin: 0;
  list-style-type: none;

  & li + li {
    height: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    flex-direction: column;

    & li + li {
      margin-top: ${GEL_SPACING_DBL};
    }
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    justify-content: space-between;
  }
`;

export const ConsentBannerText = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  margin-top: ${GEL_SPACING_TRPL};
  margin-bottom: ${GEL_SPACING_TRPL};
  color: ${C_CONSENT_CONTENT};
`;

// Style `button` and `a` as children due to inability to set `on`
// prop on styled component as required for the amp useage
const ListItem = styled.li`
  text-align: center;
  width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN};
  word-break: break-word;
  & button {
    ${({ script }) => script && getLongPrimer(script)};
    width: 100%;
    min-height: 2.75rem;
    color: ${C_EBON};
    font-weight: bold;
    background-color: ${C_GHOST};
    border: none;
    margin: 0;
    cursor: pointer;

    ${hoverFocusStyles}
  }

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    width: 100%;
  }
`;

export const ConsentBanner = ({
  dir,
  title,
  text,
  accept,
  reject,
  id,
  hidden,
  script,
  service,
}) => (
  <Wrapper dir={dir} hidden={hidden} id={id} service={service}>
    <CenterWrapper dir={dir}>
      <Title dir={dir} script={script}>
        {title}
      </Title>
      {text}
      <Options dir={dir} script={script}>
        <ListItem dir={dir} script={script}>
          {accept}
        </ListItem>
        <ListItem dir={dir} script={script}>
          {reject}
        </ListItem>
      </Options>
    </CenterWrapper>
  </Wrapper>
);

ConsentBanner.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  title: string.isRequired,
  text: element.isRequired,
  accept: element.isRequired,
  reject: element.isRequired,
  id: string,
  hidden: bool,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

ConsentBanner.defaultProps = {
  dir: 'ltr',
  id: null,
  hidden: null,
};
