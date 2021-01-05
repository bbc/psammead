import React from 'react';
import { Helmet } from 'react-helmet';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  withServicesKnob,
  buildRTLSubstories,
} from '@bbc/psammead-storybook-helpers';
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

const STORY_KIND = 'Components/ConsentBanner';
const BANNER_TEXT = 'Changes to our Privacy and Cookie Policy ';

Text.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  script: string.isRequired,
  service: string.isRequired,
  shortText: string.isRequired,
  text: string.isRequired,
};

Text.defaultProps = {
  dir: 'ltr',
};

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Canonical',
    ({ text, dir, script, service }) => {
      const shortText = (service === 'news' ? BANNER_TEXT : text)
        .trim()
        .split(' ')[0];
      return (
        <ConsentBanner
          dir={dir}
          title={service === 'news' ? 'Privacy and Cookies Policy' : text}
          text={Text({
            dir,
            script,
            service,
            text: service === 'news' ? BANNER_TEXT : text,
            shortText,
          })}
          accept={Accept(shortText)}
          reject={Reject(shortText)}
          script={script}
          service={service}
        />
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(withServicesKnob())
  .addDecorator(story => (
    <>
      <Helmet htmlAttributes={{ amp: true }}>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <link rel="canonical" href="https://www.bbc.co.uk/news" />
        <script async src="https://cdn.ampproject.org/v0.js" />
      </Helmet>
      {story()}
    </>
  ))
  .add(
    'AMP',
    ({ text, dir, script, service }) => {
      const shortText = (service === 'news' ? BANNER_TEXT : text)
        .trim()
        .split(' ')[0];
      return (
        <ConsentBanner
          amp
          dir={dir}
          title={service === 'news' ? 'Privacy and Cookies Policy' : text}
          text={Text({
            dir,
            script,
            service,
            text: service === 'news' ? BANNER_TEXT : text,
            shortText,
          })}
          accept={Accept(shortText)}
          reject={Reject(shortText)}
          script={script}
          service={service}
        />
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );

buildRTLSubstories(STORY_KIND, { include: ['Canonical'] });
