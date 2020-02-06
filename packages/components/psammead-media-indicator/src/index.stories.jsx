import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { Headline, Link } from '@bbc/psammead-story-promo';
import notes from '../README.md';
import MediaIndicator from './index';

// To ensure the white box in the media indicator is visible.
const Page = styled.div`
  background: ${C_CLOUD_LIGHT};
  height: 100vh;
`;

const TimeDuration = styled.time`
  margin: 0 ${GEL_SPACING_HLF};
`;

const StyledHeadline = styled(Headline)`
  display: inline;
`;

const PageDecorator = storyFn => <Page>{storyFn()}</Page>;

storiesOf('Components|MediaIndicator/Video', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'video without duration',
    ({ script, service }) => (
      <MediaIndicator type="video" script={script} service={service} />
    ),
    { notes },
  )
  .add(
    'video with duration',
    ({ script, service }) => (
      <MediaIndicator type="video" script={script} service={service}>
        <TimeDuration dateTime={text('datetime', 'PT2M15S')}>
          {text('duration', '2:15')}
        </TimeDuration>
      </MediaIndicator>
    ),
    { notes },
  )
  .add(
    'inline video media indicator with headline',
    ({ script, service }) => (
      <>
        <MediaIndicator
          type="video"
          script={script}
          service={service}
          isInline={boolean('inline?', true)}
        />
        <StyledHeadline script={script} service={service} promoHasImage={false}>
          <Link href="https://www.bbc.co.uk/news">
            {text('extra text', 'example text')}
          </Link>
        </StyledHeadline>
      </>
    ),
    { notes },
  );

storiesOf('Components|MediaIndicator/Audio', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'audio without duration',
    ({ script, service }) => (
      <MediaIndicator type="audio" script={script} service={service} />
    ),
    { notes },
  )
  .add(
    'audio with duration',
    ({ script, service }) => (
      <MediaIndicator type="audio" script={script} service={service}>
        <time dateTime={text('datetime', 'PT2M15S')}>
          {text('duration', '2:15')}
        </time>
      </MediaIndicator>
    ),
    { notes },
  )
  .add(
    'inline audio media indicator with headline',
    ({ script, service }) => (
      <>
        <MediaIndicator
          type="audio"
          script={script}
          service={service}
          isInline={boolean('inline?', true)}
        />
        <StyledHeadline script={script} service={service} promoHasImage={false}>
          <Link href="https://www.bbc.co.uk/news">
            {text('extra text', 'example text')}
          </Link>
        </StyledHeadline>
      </>
    ),
    { notes },
  );

storiesOf('Components|MediaIndicator/Photo', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'photogallery',
    ({ script, service }) => (
      <MediaIndicator type="photogallery" script={script} service={service} />
    ),
    { notes },
  )
  .add(
    'inline photogallery with headline',
    ({ script, service }) => (
      <>
        <MediaIndicator
          type="photogallery"
          script={script}
          service={service}
          isInline={boolean('inline?', true)}
        />
        <StyledHeadline script={script} service={service} promoHasImage={false}>
          <Link href="https://www.bbc.co.uk/news">
            {text('extra text', 'example text')}
          </Link>
        </StyledHeadline>
      </>
    ),
    { notes },
  );
