import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { string } from 'prop-types';
import { ConsentBanner, ConsentBannerText } from '.';
import notes from '../README.md';

const Accept = acceptText => (
  <button onClick={() => {}} type="button">
    {acceptText}
  </button>
);

const Reject = rejectText => (
  <a href="https://www.bbc.co.uk/usingthebbc/your-data-matters">{rejectText}</a>
);

const Text = ({ script, service, shortText, text }) => (
  <ConsentBannerText script={script} service={service}>
    {text}
    <a href="https://www.bbc.com/news">{shortText}</a>
  </ConsentBannerText>
);

Text.propTypes = {
  script: string.isRequired,
  service: string.isRequired,
  shortText: string.isRequired,
  text: string.isRequired,
};

const props = {
  title: "We've updated our Privacy and Cookies Policy",
  text: Text,
  accept: Accept,
  reject: Reject,
  script: latin,
  service: 'news',
};

storiesOf('Components|ConsentBanner', module).add('default', () => (
  <ConsentBanner {...props} />
));

storiesOf('Components|ConsentBannerWithKnobs', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [
        {
          name: 'title',
          defaultText: 'Privacy and Cookies Policy',
        },
        {
          name: 'text',
          defaultText: 'Changes to our Privacy and Cookie Policy ',
        },
        { name: 'acceptText', defaultText: 'OK' },
        { name: 'rejectText', defaultText: "Find out what's changed" },
      ],

      ({ slotTexts: [title, text], script, service }) => {
        const shortText = text.trim().split(' ')[0];
        return (
          <ConsentBanner
            title={title}
            text={Text({ script, service, text, shortText })}
            accept={Accept(shortText)}
            reject={Reject(shortText)}
            script={script}
            service={service}
          />
        );
      },
    ),
    { notes, knobs: { escapeHTML: false } },
  );
