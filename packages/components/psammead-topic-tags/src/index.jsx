import React from 'react';
import { string, shape, node } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const [TAG_TEXT_PAD_X, TAG_TEXT_PAD_Y] = ['0.4375rem', '0.96875rem']; // 7px, 15.5px

const CONTAINER_STYLES = `
  display: flex;
  flex-wrap: wrap;
  margin-top: -${GEL_SPACING_DBL};
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
  margin-top: ${GEL_SPACING_DBL};
  margin-left: ${GEL_SPACING_HLF};
  margin-right: ${GEL_SPACING_HLF};
  a {
    display: inline-flex;
    padding-top: ${TAG_TEXT_PAD_Y};
    padding-bottom: ${TAG_TEXT_PAD_Y};
    padding-left: ${TAG_TEXT_PAD_X};
    padding-right: ${TAG_TEXT_PAD_X};
    line-height: 1;
    background-color: ${C_LUNAR};
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
`;

export const TopicTag = ({ name, link }) => <a href={link}>{name}</a>;

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
