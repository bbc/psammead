import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import {
  withServicesKnob,
  RegularParagraph,
  BoldParagraph,
  ItalicParagraph,
  BoldItalicParagraph,
} from '.';

storiesOf('Utilities|Storybook-Helpers/withServicesKnob', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () =>
      withServicesKnob()(({ text, dir, script, service }) => (
        <>
          <p>I toggle dir based on language.</p>
          <p>I also provide components with these props:</p>
          <ul>
            <li>text: {text}</li>
            <li>service: {service}</li>
            <li>dir: {dir}</li>
            <li>
              script: <pre>{JSON.stringify(script, null, ' ')}</pre>
            </li>
          </ul>
        </>
      )),
    { notes },
  )
  .add(
    'withServicesKnob with defaultService option',
    () =>
      withServicesKnob({ defaultService: 'arabic' })(
        ({ text, dir, script, service }) => (
          <>
            <p>I toggle dir based on language.</p>
            <p>The default service is `arabic`.</p>
            <p>I also provide components with these props:</p>
            <ul>
              <li>text: {text}</li>
              <li>service: {service}</li>
              <li>dir: {dir}</li>
              <li>
                script: <pre>{JSON.stringify(script, null, ' ')}</pre>
              </li>
            </ul>
          </>
        ),
      ),
    { notes },
  )
  .add(
    'withServicesKnob with services option',
    () =>
      withServicesKnob({ services: ['news', 'arabic', 'amharic'] })(
        ({ text, dir, script, service }) => (
          <>
            <p>I toggle dir based on language.</p>
            <p>
              The list of services you can select include only `news`, `arabic`,
              `amharic`.
            </p>
            <p>I also provide components with these props:</p>
            <ul>
              <li>text: {text}</li>
              <li>service: {service}</li>
              <li>dir: {dir}</li>
              <li>
                script: <pre>{JSON.stringify(script, null, ' ')}</pre>
              </li>
            </ul>
          </>
        ),
      ),
    { notes },
  );

storiesOf('Utilities|Storybook-Helpers/StyledParagraph', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () =>
      withServicesKnob()(({ script, service }) => (
        <>
          <RegularParagraph script={script} service={service}>
            This is text in a paragraph styled with SansRegular.
          </RegularParagraph>
          <BoldParagraph script={script} service={service}>
            This is text in a paragraph styled with SansRegular.
          </BoldParagraph>
          <ItalicParagraph script={script} service={service}>
            This is text in a paragraph styled with SansRegular.
          </ItalicParagraph>
          <BoldItalicParagraph script={script} service={service}>
            This is text in a paragraph styled with SansRegular.
          </BoldItalicParagraph>
        </>
      )),
    { notes },
  );
