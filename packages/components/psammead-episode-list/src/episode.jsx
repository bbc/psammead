import React from 'react';
import styled from 'styled-components';
import { C_METAL, C_EBON, C_CLOUD_LIGHT, C_POSTBOX } from '@bbc/psammead-styles/colours';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import PlayButton from './playButton';

const getEpisodeWrapper = ElementType => styled(ElementType)`
  padding: 16px 0;
  a {
    &:hover, &:focus {
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
        color: ${C_METAL}
      }
    }
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

// TODO: move to play button file
const PlayIcon = styled.div`
  padding-top: 2px;
  display: inline-block;
  vertical-align: top;
  &:dir(ltr) {
    padding-right: 16px;
  }
  &:dir(rtl) {
    padding-left: 16px;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 8px;
  }
`;

const Episode = ({ children, as, Link, script, service }) => {
    const EpisodeWrapper = getEpisodeWrapper(as || 'div');
    return (
      <EpisodeWrapper>
        <Link>
          <PlayIcon>
            <PlayButton />
          </PlayIcon>
          <Wrapper>
            {children.map(child =>
              React.cloneElement(child, { script, service }),
            )}
          </Wrapper>
        </Link>
      </EpisodeWrapper>
    );
  };

  export default Episode;
