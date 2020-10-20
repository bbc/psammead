import React from 'react';
import styled from '@emotion/styled';
import { C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { string, shape, arrayOf, oneOf, element } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

import Episode from './Episode';
import Link from './Link';
import Title from './Title';
import Description from './Description';
import Metadata from './Metadata';

const StyledEpisodeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: ${GEL_SPACING_DBL} 0;
  }
  li:first-child {
    padding-top: 0;
  }
  li:last-child {
    padding-bottom: 0;
  }
  li:not(:last-child) {
    border-bottom: 1px ${C_CLOUD_LIGHT} solid;
  }
`;

// Used to make service, script and dir passed to <EpisodeList> available to children
const LocalityContext = React.createContext({});
const withEpisodeLocality = Component => props => (
  <LocalityContext.Consumer>
    {locality => <Component {...locality} {...props} />}
  </LocalityContext.Consumer>
);

const EpisodeList = ({ children, script, service, dir }) => {
  if (!children.length) return null;

  const hasMultipleChildren = children.length > 1;

  return (
    <LocalityContext.Provider value={{ script, service, dir }}>
      {hasMultipleChildren ? (
        <StyledEpisodeList role="list">
          {children.map(child => (
            <li key={child.key}>{child}</li>
          ))}
        </StyledEpisodeList>
      ) : (
        children
      )}
    </LocalityContext.Provider>
  );
};

EpisodeList.propTypes = {
  children: arrayOf(element),
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

EpisodeList.defaultProps = {
  children: [],
  dir: 'ltr',
};

// This module also has a range of supplemental components to provide consumers with some compositational control
EpisodeList.Episode = Episode;
EpisodeList.Link = Link;
EpisodeList.Title = withEpisodeLocality(Title);
EpisodeList.Description = withEpisodeLocality(Description);
EpisodeList.Metadata = withEpisodeLocality(Metadata);

export default EpisodeList;
