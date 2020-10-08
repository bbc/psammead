import React from 'react';
import styled from 'styled-components';
import { C_METAL, C_EBON, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import PlayButton from './playButtonJoro';

const EpisodeList = styled.ul`
  list-style: none;
  li {
    padding: 16px 0;
  }
  li:not(:last-child) {
    border-bottom: 1px ${C_CLOUD_LIGHT} solid;
  }
`;

const PlayIcon = styled.div`
  padding-top: 2px;
  padding-right: 16px;
  display: inline-block;
  vertical-align: top;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 8px;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
`;

// Most stuff goes
EpisodeList.Episode = ({ children, Link, script, service }) => {
  return (
    <li>
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
    </li>
  );
};

const base = styled.span`
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
`;

EpisodeList.BrandTitle = styled(base)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 16px;
  }
`;

EpisodeList.EpisodeTitle = styled(base)`
  font-size: 15px;
  line-height: 18px;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    font-size: 14px;
  }
  margin: 4px 0;
`;

EpisodeList.Duration = styled(base)`
  font-size: 14px;
  line-height: 18px;
  color: ${C_METAL};
`;

EpisodeList.Date = styled(base)`
  font-size: 14px;
  line-height: 18px;
`;

EpisodeList.propTypes = {};

EpisodeList.defaultProps = {};

export default EpisodeList;
