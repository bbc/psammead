/* eslint-disable jsx-a11y/aria-role */
import React, { Children, cloneElement } from 'react';
import { node } from 'prop-types';
import styled from '@emotion/styled';
import {
  C_METAL,
  C_POSTBOX,
  C_WHITE,
  C_STONE,
} from '@bbc/psammead-styles/colours';

const StyleAnchor = styled.a`
  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    overflow: hidden;
    z-index: 1;
  }
  display: inline;
  line-height: 0;
  text-decoration: none;
  .rounded-play-button__outer-circle,
  .rounded-play-button__inner-circle,
  .rounded-play-button__triangle {
    transition: fill ease-in-out 0.2s;
  }
  &:hover,
  &:focus {
    .underlined_hover {
      text-decoration: underline;
    }
    .rounded-play-button__outer-circle,
    .rounded-play-button__inner-circle {
      fill: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: ${C_WHITE};
    }
  }
  &:visited {
    [class*='--visited'] {
      color: ${({ darkMode }) => (darkMode ? C_STONE : C_METAL)};
    }
  }
`;

const Link = ({ children, ...props }) => {
  const hasMultipleChildren = Children.count(children);

  return (
    <StyleAnchor {...props}>
      {hasMultipleChildren ? (
        <span role="text">{children}</span>
      ) : (
        cloneElement(children, { role: 'text' })
      )}
    </StyleAnchor>
  );
};

Link.propTypes = {
  children: node.isRequired,
};
