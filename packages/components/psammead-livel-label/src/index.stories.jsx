import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { Headline, Link } from '@bbc/psammead-story-promo';
import LiveLabel from './index';
import notes from '../README.md';

const Wrapper = styled.div`
  position: relative;
`;

// eslint-disable-next-line react/prop-types
const HeadlineComponent = ({ script, service, dir, headline }) => {
  return (
    <Headline script={script} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        <LiveLabel service={service} dir={dir} ariaHidden withOffScreenText>
          {headline}
        </LiveLabel>
      </Link>
    </Headline>
  );
};

storiesOf('Components/LiveLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'with english live text',
    ({ service, dir }) => (
      <LiveLabel service={service} dir={dir} ariaHidden withOffScreenText />
    ),
    {
      notes,
    },
  )
  .add(
    'with translated live text',
    ({ service, dir }) => (
      <LiveLabel
        service={service}
        dir={dir}
        ariaHidden={false}
        liveText="AS E DE HAPPEN"
      />
    ),
    {
      notes,
    },
  )
  .add(
    'with extra offscreen text',
    ({ service, dir }) => (
      <LiveLabel
        service={service}
        dir={dir}
        ariaHidden
        withOffScreenText
        offScreenText="Watch Live"
      />
    ),
    {
      notes,
    },
  )
  .add(
    'with headline',
    ({ text: textSnippet, script, service, dir }) => (
      <Wrapper>
        <HeadlineComponent
          script={script}
          service={service}
          dir={dir}
          headline={textSnippet}
        />
      </Wrapper>
    ),
    {
      notes,
    },
  );
