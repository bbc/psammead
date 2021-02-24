import React, { useState, useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  withServicesKnob,
  buildRTLSubstories,
} from '@bbc/psammead-storybook-helpers';
import { oneOf, string } from 'prop-types';
import { ConsentBanner, ConsentBannerText } from '.';
import notes from '../README.md';

// const Accept = acceptText => (
//   <button onClick={() => {}} type="button">
//     {acceptText}
//   </button>
// );

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
const NEWS_BODY_TEXT =
  "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.";
const NEWS_ACCEPT_TEXT = 'OK';
const NEWS_REJECT_TEXT = 'Find out what has changed';

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

const Accept = (message, onClick, dataAttribute) => {
  return (
    <button onClick={onClick} type="button" {...dataAttribute}>
      {message}
    </button>
  );
};

const ConsentBannerContainer = ({ text, dir, script, service, shortText }) => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    showBanner && (
      <ConsentBanner
        dir={dir}
        title={
          service === 'news'
            ? "We've updated our Privacy and Cookies Policy"
            : text
        }
        text={Text({
          dir,
          script,
          service,
          text: service === 'news' ? NEWS_BODY_TEXT : text,
        })}
        accept={Accept(
          service === 'news' ? Accept(NEWS_ACCEPT_TEXT) : Accept(shortText),
          () => setShowBanner(false),
        )}
        reject={
          service === 'news' ? Reject(NEWS_REJECT_TEXT) : Reject(shortText)
        }
        script={script}
        service={service}
      />
    )
  );
};

const StorybookContainer = ({ dir, text, script, service, shortText }) => {
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [showConsentBanner, setShowConsentBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConsentBanner(true);
    }, 2000);
    console.log('focusInput');
    inputRef.current.focus();
    setInputFocused(true);
    return () => {
      clearTimeout(timer);
    };
  }, [inputFocused]);

  return (
    <>
      <form>
        <label htmlFor="textInput">First name:</label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          ref={inputRef}
        ></input>
      </form>
      {showConsentBanner && (
        <ConsentBannerContainer
          text={text}
          dir={dir}
          script={script}
          service={service}
          shortText={shortText}
        />
      )}
    </>
  );
};

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, dir, script, service }) => {
      const shortText = (service === 'news' ? BANNER_TEXT : text)
        .trim()
        .split(' ')[0];
      return (
        <ConsentBanner
          dir={dir}
          title={
            service === 'news'
              ? "We've updated our Privacy and Cookies Policy"
              : text
          }
          text={Text({
            dir,
            script,
            service,
            text: service === 'news' ? NEWS_BODY_TEXT : text,
            shortText,
          })}
          accept={
            service === 'news' ? Accept(NEWS_ACCEPT_TEXT) : Accept(shortText)
          }
          reject={
            service === 'news' ? Reject(NEWS_REJECT_TEXT) : Reject(shortText)
          }
          script={script}
          service={service}
        />
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'focus',
    ({ text, dir, script, service }) => {
      const shortText = (service === 'news' ? BANNER_TEXT : text)
        .trim()
        .split(' ')[0];
      return (
        <StorybookContainer
          text={text}
          dir={dir}
          script={script}
          service={service}
          shortText={shortText}
        />
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );

buildRTLSubstories(STORY_KIND, { include: ['default'] });
