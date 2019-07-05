import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
import { ConsentBanner, ConsentBannerText } from '.';

const Accept = (
  <button onClick={() => {}} type="button">
    OK
  </button>
);

const Reject = (
  <a href="https://www.bbc.co.uk/usingthebbc/your-data-matters">
    Find out what&apos;s changed
  </a>
);

const Text = (
  <ConsentBannerText script={latin} service="news">
    This is some text with <a href="https://www.bbc.com/news">a link</a> inside
    the consent banner. We have made some important changes to our Privacy and
    Cookie Policy.
  </ConsentBannerText>
);

const props = {
  title: "We've updated our Privacy and Cookies Policy",
  text: Text,
  accept: Accept,
  reject: Reject,
  script: latin,
};

storiesOf('Components|ConsentBanner', module).add('default', () => (
  <ConsentBanner {...props} />
));
