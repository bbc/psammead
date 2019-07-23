import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
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
    {`${text} `}
    <a href="https://www.bbc.com/news">{shortText}</a>
  </ConsentBannerText>
);

Text.propTypes = {
  script: string.isRequired,
  service: string.isRequired,
  shortText: string.isRequired,
  text: string.isRequired,
};

storiesOf('Components|ConsentBanner', module)
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
