import styled from 'styled-components';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import { grid } from '@bbc/psammead-styles/detection';
import { getPica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING, // 8 px
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { node, string, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

export const UsefulLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => service && getSerifMedium(service)};
  color: ${C_EBON};
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:visited {
    color: ${C_METAL};
  }
`;

export const UsefulLinksUl = styled.ul.attrs({ role: 'list' })`
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    @supports (${grid}) {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
`;

export const UsefulLinksLi = styled.li.attrs({ role: 'listitem' })`
  padding-top: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    @supports (${grid}) {
      align-self: center;
    }
    @supports not (${grid}) {
      display: inline-block;
      min-width: 50%;
    }
  }
`;

UsefulLink.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  href: string.isRequired,
};

UsefulLinksUl.propTypes = {
  children: node.isRequired,
};

UsefulLinksLi.propTypes = {
  children: node.isRequired,
};
