import React from 'react';

// Used to make service, script and dir passed to <EpisodeList> available to children
export const EpisodeContext = React.createContext({});
export const withEpisodeContext = Component => props => (
  <EpisodeContext.Consumer>
    {context => <Component {...context} {...props} />}
  </EpisodeContext.Consumer>
);
