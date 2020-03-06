import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { Headline, Link } from '@bbc/psammead-story-promo';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import LiveLabel from './index';
import notes from '../README.md';

const Wrapper = styled.div`
  position: relative;
`;

/* eslint-disable-next-line react/prop-types */
const LiveComponent = ({ service, dir, headline }) => (
  /* eslint-disable-next-line jsx-a11y/aria-role */
  <span role="text">
    <LiveLabel service={service} dir={dir} ariaHidden>
      LIVE
    </LiveLabel>
    <VisuallyHiddenText lang="en-GB">{` Live, `}</VisuallyHiddenText>
    {headline}
  </span>
);

// eslint-disable-next-line react/prop-types
const HeadlineComponent = ({ script, service, dir, headline }) => {
  return (
    <Headline script={script} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        <LiveComponent service={service} dir={dir} headline={headline} />
      </Link>
    </Headline>
  );
};

storiesOf('Components/LiveLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'with aria-hidden',
    ({ service, dir }) => {
      return (
        <LiveLabel service={service} dir={dir} ariaHidden>
          LIVE
        </LiveLabel>
      );
    },
    {
      notes,
    },
  )
  .add(
    'without aria-hidden',
    ({ service, dir }) => {
      return (
        <LiveLabel service={service} dir={dir}>
          LIVE
        </LiveLabel>
      );
    },
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
