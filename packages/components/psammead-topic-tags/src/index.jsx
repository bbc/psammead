import React from 'react';
import { string, shape, node } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_HLF, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const [TAG_TEXT_PAD_Y, TAG_TEXT_PAD_X] = ['0.375rem', '0.4375rem'];
const ROW_SPACING = '0.0625rem';

const CONTAINER_STYLES = `
  display: flex;
  flex-wrap: wrap;
  margin-top: -${ROW_SPACING};
  margin-bottom: 0;
  margin-left: -${GEL_SPACING_HLF};
  margin-right: -${GEL_SPACING_HLF};
  padding: 0;
`;

const SingleTopicTagContainer = styled.div`
  ${CONTAINER_STYLES}
`;

const TopicsList = styled.ul`
  ${CONTAINER_STYLES}
  list-style-type: none;
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

export const TopicTag = ({ name, link }) => (
  <a href={link}>
    <span>{name}</span>
  </a>
);

export const TopicTags = ({ children, script, service }) => {
  const hasMultipleChildren = children.length > 1;

  return (
    <>
      {hasMultipleChildren ? (
        <TopicsList role="list" service={service} script={script}>
          {children.map((child, index) => {
            if (child.type !== TopicTag) return null;

            return (
              <SingleTopicTagItem
                as="li"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                service={service}
                script={script}
              >
                {child}
              </SingleTopicTagItem>
            );
          })}
        </TopicsList>
      ) : (
        <SingleTopicTagContainer service={service} script={script}>
          <SingleTopicTagItem service={service} script={script}>
            {children}
          </SingleTopicTagItem>
        </SingleTopicTagContainer>
      )}
    </>
  );
};

TopicTag.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
};

TopicTags.propTypes = {
  children: node,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

TopicTags.defaultProps = {
  children: [],
};
