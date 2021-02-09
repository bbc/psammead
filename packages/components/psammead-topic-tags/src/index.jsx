import React from 'react';
import { string, element, oneOf, shape, arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const ltrRtl = (ltrValue, rtlValue) => ({ dir }) =>
  dir === 'ltr' ? ltrValue : rtlValue;

const topicTagParent = `
  word-break: break-word;
  & a {
    display: flex;
    padding-top: ${GEL_SPACING};
    padding-bottom: ${GEL_SPACING};
    text-decoration: none;
    color: ${C_EBON};

    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${C_METAL};
    }
  }

  & a > span {
    background-color: ${C_LUNAR};
    padding: 0.375rem 0.4375rem;
  }

  &:not(:first-of-type) {
    margin-top: 0.0625rem;
  }
`;

const topicTagsContainer = `
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const SingleTopicTagContainer = styled.div`
  ${topicTagsContainer}
`;

const TopicsList = styled.ul`
  list-style-type: none;
  ${topicTagsContainer}
`;

const TopicTagListItem = styled.li`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getBrevier(script)}
  ${ltrRtl('margin-right', 'margin-left')}: ${GEL_SPACING};

  ${topicTagParent}
`;

const SingleTopicTagItem = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getBrevier(script)}
  ${ltrRtl('margin-right', 'margin-left')}: ${GEL_SPACING};

  ${topicTagParent}
`;

export const TopicTag = ({ topicName, topicLink }) => (
  <a href={topicLink}>
    <span>{topicName}</span>
  </a>
);

export const TopicTags = ({ dir, children, script, service }) => {
  const hasMultipleChildren = children.length > 1;

  return (
    <>
      {hasMultipleChildren ? (
        <TopicsList dir={dir} role="list" service={service} script={script}>
          {children.map(child => (
            <TopicTagListItem
              dir={dir}
              key={child.key}
              service={service}
              script={script}
            >
              {child}
            </TopicTagListItem>
          ))}
        </TopicsList>
      ) : (
        <SingleTopicTagContainer dir={dir} service={service} script={script}>
          <SingleTopicTagItem dir={dir} service={service} script={script}>
            {children}
          </SingleTopicTagItem>
        </SingleTopicTagContainer>
      )}
    </>
  );
};

TopicTag.propTypes = {
  topicName: string.isRequired,
  topicLink: string.isRequired,
};

TopicTags.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  children: arrayOf(element),
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

TopicTags.defaultProps = {
  dir: 'ltr',
  children: [],
};
