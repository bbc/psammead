import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import EmbedError from './index';

const Container = styled.div`
  height: calc(100vw * (9 / 16));
  width: 100vw;
`;

storiesOf('Components|EmbedError', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ service }) => (
      <Container>
        <EmbedError
          service={service}
          message={text(
            'message',
            "Sorry, we can't display this part of the story on this lightweight mobile page.",
          )}
        />
      </Container>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with link',
    ({ service }) => (
      <Container>
        <EmbedError
          service={service}
          message={text(
            'message',
            "Sorry, we can't display this part of the story on this lightweight mobile page.",
          )}
          link={{
            text: text(
              'text',
              'View the full version of the page to see all the content.',
            ),
            href: '#',
          }}
        />
      </Container>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'fill page',
    ({ service }) => (
      <EmbedError
        service={service}
        message={text(
          'message',
          "Sorry, we can't display this part of the story on this lightweight mobile page.",
        )}
        fillViewport
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );
