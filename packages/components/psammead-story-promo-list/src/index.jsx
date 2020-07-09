import styled from 'styled-components';
import { node, bool } from 'prop-types';
import { C_LUNAR } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

export const StoryPromoLiThin = styled.li.attrs({
  role: 'listitem',
})`
  ${({ border }) =>
    !border &&
    `
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
        border-bottom: none;
    }
  `}

  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    border-bottom: 0.0625rem solid ${C_LUNAR};
  }
  &:first-child {
    padding-top: 0;

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
      padding-top: ${GEL_SPACING_DBL};
    }
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }
`;

export const StoryPromoLi = styled(StoryPromoLiThin)`
  padding: ${GEL_SPACING} 0 ${GEL_SPACING_DBL};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: 0 0 ${GEL_SPACING_TRPL};
  }
`;

export const StoryPromoUl = styled.ul.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

StoryPromoUl.propTypes = {
  children: node.isRequired,
};

StoryPromoLi.propTypes = {
  children: node.isRequired,
  border: bool,
};

StoryPromoLi.defaultProps = {
  border: true,
};

StoryPromoLiThin.propTypes = {
  children: node.isRequired,
  border: bool,
};

StoryPromoLiThin.defaultProps = {
  border: true,
};
