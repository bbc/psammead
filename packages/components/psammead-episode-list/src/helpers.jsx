import React from 'react';

// Used to make service, script and dir passed to <EpisodeList> available to children
export const LocalityContext = React.createContext({});
export const withEpisodeLocality = Component => props => (
  <LocalityContext.Consumer>
    {locality => <Component {...locality} {...props} />}
  </LocalityContext.Consumer>
);
