/* eslint-disable */
import React from 'react';
import { string, element, bool, oneOf, shape, arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR } from '@bbc/psammead-styles';
import {
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-foundations/breakpoints';

const ltrRtl = (ltrValue, rtlValue) => ({ dir }) =>
  dir === 'ltr' ? ltrValue : rtlValue;

const TopicsList = styled.ul`
  list-style-type: none;
  margin: 5px;
`;

const TopicTagListItem = styled.li`

  background-color: ${C_LUNAR};
`;

export const TopicTag = ({ topicName, topicLink }) => (
    <a href={topicLink}>{topicName}</a>
);

TopicTag.propTypes = {
  topicName: string.isRequired,
  topicLink: string.isRequired,
};

TopicTag.defaultProps = {
  topicName: null,
  topicLink: null,
};

export const TopicTags = ({
  dir,
  children,
}) => {

  console.log(children);

  const hasMultipleChildren = children.length > 1;

  return (
    <>
    {hasMultipleChildren ? (
      <TopicsList dir={dir}>
        {children.map(child => (
          <TopicTagListItem key={child.key} >
            {child}
          </TopicTagListItem>
        ))}
      </TopicsList>
    ) : (
      children
    )}
    </>
)};

TopicTags.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  children: arrayOf(element),
  ulProps: shape({}),
  liProps: shape({}),
};

TopicTags.defaultProps = {
  children: [],
  dir: 'ltr',
  ulProps: {},
  liProps: {},
};
