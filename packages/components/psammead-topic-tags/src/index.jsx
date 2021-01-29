/* eslint-disable */
import React from 'react';
import { string, element, bool, oneOf, shape, arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getLongPrimer } from '../../psammead-caption/node_modules/@bbc/gel-foundations/dist/typography';

const ltrRtl = (ltrValue, rtlValue) => ({ dir }) =>
  dir === 'ltr' ? ltrValue : rtlValue;

const TopicsList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 5px;
`;

const TopicTagListItem = styled.li`
  ${({ service }) => getSansRegular(service)}
  ${({script}) => script && getLongPrimer(script)}
  font-family: Helvetica;
  background-color: ${C_LUNAR};
  
  ${ltrRtl('margin-right', 'margin-left')}: ${GEL_SPACING};

  & a {
    display: block;
    text-decoration: none;
    color: ${C_EBON};
    padding: 6px 7px;
  }
`;

const SingleTopicTagContainer = styled.div`
  background-color: ${C_LUNAR};

  & a {
    text-decoration: none;
    color: ${C_EBON};
  }
`;

export const TopicTag = ({ topicName, topicLink }) => (
    <a href={topicLink}>{topicName}</a>
);



export const TopicTags = ({
  dir,
  children,
  script,
  service,
}) => {

  console.log(children);

  const hasMultipleChildren = children.length > 1;

  return (
    <>
    {hasMultipleChildren ? (
      <TopicsList dir={dir} role="list" service={service} script={script}>
        {children.map(child => (
          <TopicTagListItem key={child.key} service={service}>
            {child}
          </TopicTagListItem>
        ))}
      </TopicsList>
    ) : (
      <SingleTopicTagContainer service={service} script={script}>
        {children}
      </SingleTopicTagContainer>
    )}
    </>
)};

TopicTag.propTypes = {
  topicName: string.isRequired,
  topicLink: string.isRequired,
};

TopicTag.defaultProps = {
  topicName: null,
  topicLink: null,
};

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
