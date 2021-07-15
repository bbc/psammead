import React, { forwardRef } from 'react';
import { string, shape, node, func } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

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
    min-height: 44px;
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    align-items: center;
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

export const TopicTag = forwardRef(({ name, link, onClick }, ref) => (
  <a href={link} onClick={onClick} ref={ref}>
    {name}
  </a>
));

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
            {children.type === TopicTag && children}
          </SingleTopicTagItem>
        </SingleTopicTagContainer>
      )}
    </>
  );
};

TopicTag.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
  onClick: func,
};

TopicTag.defaultProps = { onClick: null };

TopicTags.propTypes = {
  children: node,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

TopicTags.defaultProps = {
  children: [],
};
