/* eslint-disable */
import React from 'react';
import { string, element, bool, oneOf, shape } from 'prop-types';
import styled from '@emotion/styled';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-foundations/breakpoints';

const ltrRtl = (ltrValue, rtlValue) => ({ dir }) =>
  dir === 'ltr' ? ltrValue : rtlValue;

const Wrapper = styled.div`
  padding: 5px;
`;

export const TopicTag = ({ topicName, topicLink }) => (
  <Wrapper>
    <a href={topicLink}>{topicName}</a>
  </Wrapper>
);

TopicTag.propTypes = {
  topicName: string.isRequired,
  topicLink: string.isRequired,
};

TopicTag.defaultProps = {
  topicName: null,
  topicLink: null,
};

export const TopicTagsContainer = ({ dir }) => (
  <Wrapper dir={dir}>
    <TopicTag topicName="Test" topicLink="https://www.google.com" />
  </Wrapper>
);

TopicTagsContainer.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
};

TopicTagsContainer.defaultProps = {
  dir: 'ltr',
};
