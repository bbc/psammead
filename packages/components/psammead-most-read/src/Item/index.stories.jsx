import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import { MostReadLink, MostReadRank } from '.';
import { links } from '../testHelpers/fixtureData';

const lastUpdated = (script, service) => (
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
);

const stories = storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

links.forEach(({ language, ...props }) => {
  stories.add(`MostReadLink ${language}`, ({ script, service }) => (
    <MostReadLink link={props} service={service} script={script} />
  ));
});

stories.add(`MostReadLink with last updated date`, ({ script, service }) => (
  <MostReadLink
    link={links[0]}
    lastUpdated={lastUpdated(script, service)}
    service={service}
    script={script}
  />
));

stories
  .add(`MostReadRank LTR`, ({ script, service }) => (
    <MostReadRank service={service} script={script}>
      5
    </MostReadRank>
  ))
  .add(`MostReadRank LTR double digits`, ({ script, service }) => (
    <MostReadRank service={service} script={script}>
      10
    </MostReadRank>
  ))
  .add(`MostReadRank RTL`, ({ script, service }) => (
    <MostReadRank service={service} script={script}>
      ۲
    </MostReadRank>
  ));
