import React from 'react';
import styled from '@emotion/styled';
import { string, shape, arrayOf, element } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_LUNAR } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

import Title from './components/title';
import Card from './components/card';
import CardContent from './components/card-content';
import CardLink from './components/card-link';
import CardImageWrapper from './components/card-image-wrapper';
import CardTitle from './components/card-title';
import CardDescription from './components/card-description';
import CardEpisodesText from './components/card-episodes-text';

const PodcastContext = React.createContext({});
const withPodcastContext = Component => props => (
  <PodcastContext.Consumer>
    {context => <Component {...context} {...props} />}
  </PodcastContext.Consumer>
);

const Wrapper = styled.section`
  background-color: ${C_LUNAR};
  padding: ${GEL_SPACING_DBL};
`;

const PodcastPromo = ({ script, service, children, ...props }) => (
  <PodcastContext.Provider value={{ script, service }}>
    <Wrapper {...props}>{children}</Wrapper>
  </PodcastContext.Provider>
);

PodcastPromo.Title = withPodcastContext(Title);
PodcastPromo.Card = Card;
PodcastPromo.Card.Link = CardLink;
PodcastPromo.Card.ImageWrapper = CardImageWrapper;
PodcastPromo.Card.Content = CardContent;
PodcastPromo.Card.Title = withPodcastContext(CardTitle);
PodcastPromo.Card.Description = withPodcastContext(CardDescription);
PodcastPromo.Card.EpisodesText = withPodcastContext(CardEpisodesText);

PodcastPromo.propTypes = {
  children: arrayOf(element).isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

PodcastPromo.defaultProps = {};

export default PodcastPromo;
