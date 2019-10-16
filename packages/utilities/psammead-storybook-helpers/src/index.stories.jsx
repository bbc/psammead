import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import { inputProvider, dirDecorator, withServicesKnob } from '.';

storiesOf('Utilities|Input Provider', module)
  .addDecorator(withKnobs)
  .add(
    'simple',
    inputProvider({
      componentFunction: () => <span>I toggle dir based on language</span>,
    }),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'simple - limited services',
    inputProvider({
      componentFunction: () => (
        <span>Im only availible in news, pidgin & thai</span>
      ),
      services: ['news', 'pidgin', 'thai'],
    }),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'complex',
    inputProvider({
      slots: [
        {
          name: 'first slot',
          defaultText:
            "this slot overwrites the news default; the next one doesn't",
        },
        { name: 'second slot' },
      ],
      /* eslint-disable react/prop-types */
      componentFunction: ({
        slotTexts: [first, second],
        script,
        dir,
        service,
      }) => (
        <ul>
          <li>{first}</li>
          <li>{second}</li>
          <li>{service}</li>
          <li>Selected direction: {dir}</li>
          <li>
            Content of selected script:
            <pre>{JSON.stringify(script, null, ' ')}</pre>
          </li>
        </ul>
      ),
    }),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('Utilities|Input Provider', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'with dirDecorator',
    () => <span> I toogle dir based on language using dirDecorator</span>,
    { notes },
  );

storiesOf('Utilities|withServicesKnob', module)
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
