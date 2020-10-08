import React from 'react';
import styled from 'styled-components';
import { C_METAL, C_POSTBOX } from '@bbc/psammead-styles/colours';

import { string, shape, func, arrayOf, element } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

import PlayButton from './playButton';

const getEpisodeWrapper = ElementType => styled(ElementType)`
  padding: 16px 0;
  a {
    &:hover,
    &:focus {
      span {
        text-decoration: underline;
      }
      .play-button-wrapper {
        background-color: ${C_POSTBOX};
        border-color: ${C_POSTBOX};
      }
      .play-icon {
        border-left-color: white;
      }
    }
    &:visited {
      span {
        color: ${C_METAL};
      }
    }
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Episode = ({ children, as, LinkElement, script, service }) => {
  const EpisodeWrapper = getEpisodeWrapper(as);
  return (
    <EpisodeWrapper>
      <LinkElement>
        <PlayButton />
        <Wrapper>
          {children.map(child =>
            React.cloneElement(child, { script, service }),
          )}
        </Wrapper>
      </LinkElement>
    </EpisodeWrapper>
  );
};

Episode.propTypes = {
  children: arrayOf(element),
  as: string,
  LinkElement: func.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

Episode.defaultProps = {
  children: [],
  as: 'div',
};

export default Episode;
