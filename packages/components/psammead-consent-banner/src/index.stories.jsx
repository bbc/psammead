import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { dirDecorator, inputProvider } from '@bbc/psammead-storybook-helpers';
import { oneOf, string } from 'prop-types';
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

const Text = ({ dir, script, service, shortText, text }) => (
  <ConsentBannerText dir={dir} script={script} service={service}>
    {`${text} `}
    <a href="https://www.bbc.com/news">{shortText}</a>
  </ConsentBannerText>
);

Text.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: string.isRequired,
  service: string.isRequired,
  shortText: string.isRequired,
  text: string.isRequired,
};

storiesOf('Components|ConsentBanner', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
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

      ({ slotTexts: [title, text], dir, script, service }) => {
        const shortText = text.trim().split(' ')[0];
        return (
          <ConsentBanner
            dir={dir}
            title={title}
            text={Text({ dir, script, service, text, shortText })}
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
