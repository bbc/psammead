import React from 'react';
import { string, oneOf, oneOfType, shape, arrayOf, objectOf } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_HLF, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const [TAG_TEXT_PAD_Y, TAG_TEXT_PAD_X, ROW_SPACING] = [
  '0.375rem',
  '0.4375rem',
  '0.0625rem',
];

const topicTagsContainer = `
  display: flex;
  flex-wrap: wrap;
  margin-top: -${ROW_SPACING};
  margin-bottom: 0;
  margin-left: -${GEL_SPACING_HLF};
  margin-right: -${GEL_SPACING_HLF};
  padding: 0;
`;

const SingleTopicTagContainer = styled.div`
  ${topicTagsContainer}
`;

const TopicsList = styled.ul`
  list-style-type: none;
  ${topicTagsContainer}
`;

const SingleTopicTagItem = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getBrevier(script)}

  word-break: break-word;
  margin-top: ${ROW_SPACING};
  margin-left: ${GEL_SPACING_HLF};
  margin-right: ${GEL_SPACING_HLF};
  a {
    display: flex;
    padding-top: ${GEL_SPACING};
    padding-bottom: ${GEL_SPACING};
    text-decoration: none;
    color: ${C_EBON};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &:visited {
      color: ${C_METAL};
    }
  }

  a > span {
    background-color: ${C_LUNAR};
    padding: ${TAG_TEXT_PAD_Y} ${TAG_TEXT_PAD_X};
  }
`;

export const TopicTag = ({ topicName, topicLink }) => (
  <a href={topicLink}>
    <span>{topicName}</span>
  </a>
);

export const TopicTags = ({ dir, children, script, service }) => {
  if (children.length === 0) return null;

  const hasMultipleChildren = children.length > 1;

  return (
    <>
      {hasMultipleChildren ? (
        <TopicsList dir={dir} role="list" service={service} script={script}>
          {children.map((child, i) => {
            if (child.type !== TopicTag) return null;
            const key = i;

            return (
              <SingleTopicTagItem
                as="li"
                dir={dir}
                key={key}
                service={service}
                script={script}
              >
                {child}
              </SingleTopicTagItem>
            );
          })}
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
  children: oneOfType([arrayOf(TopicTag), objectOf(TopicTag)]),
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

TopicTags.defaultProps = {
  dir: 'ltr',
  children: [],
};
