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

const ConsentBannerContainer = ({
  text,
  dir,
  script,
  service,
  shortText,
  onAccept,
}) => {
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
      accept={Accept(service === 'news' ? NEWS_ACCEPT_TEXT : shortText, () => {
        onAccept();
      })}
      reject={service === 'news' ? Reject(NEWS_REJECT_TEXT) : Reject(shortText)}
      script={script}
      service={service}
    />
  );
};

const StorybookContainer = ({ dir, text, script, service, shortText }) => {
  const [showConsentBanner1, setShowConsentBanner1] = useState(false);
  const [showConsentBanner2, setShowConsentBanner2] = useState(false);
  const [initialRender, setInitialRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConsentBanner1(true);
    }, 5000);
    setInitialRender(true);
    return () => {
      clearTimeout(timer);
    };
  }, [initialRender]);

  return (
    <>
      <form>
        <label htmlFor="textInput">First name:</label>
        <input type="text" id="textInput" name="textInput" autoFocus />
        <div>Some page content</div>
        <div>Some more page content</div>
      </form>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit lectus in lectus semper, at facilisis felis auctor. Duis convallis suscipit augue quis imperdiet. Donec arcu nisl, tincidunt gravida faucibus vel, feugiat nec arcu. Sed scelerisque lacus sed dolor tincidunt condimentum. Etiam id dapibus massa. Suspendisse sed facilisis augue. Nullam eu urna metus. Donec ex diam, eleifend eget auctor vel, feugiat id tortor. Fusce neque dui, sollicitudin sit amet gravida sit amet, consequat a velit. Quisque rhoncus porttitor fermentum.

        Nunc dapibus ultricies metus quis volutpat. Duis quis augue nec metus imperdiet aliquam. Curabitur fringilla eros orci, a mollis nunc maximus dictum. Vestibulum ut felis ipsum. Sed porta odio id euismod dapibus. Proin a porta elit. Quisque ac finibus magna. Nulla sed urna lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eleifend ornare lorem eu rutrum. Suspendisse lacinia nisi a dictum imperdiet. Nunc eu mauris a velit posuere auctor in non leo.

        Quisque risus nisl, finibus nec est eget, dapibus venenatis justo. Mauris a laoreet lectus. Integer faucibus, nisl quis blandit malesuada, lorem magna scelerisque sapien, at convallis neque magna ac purus. Ut quis lacus tempus ligula efficitur egestas. Sed lacinia in dui at varius. Praesent egestas rutrum elit, eget interdum ipsum eleifend eu. In dapibus, ligula venenatis aliquam facilisis, metus massa molestie orci, interdum varius neque enim a velit.

        Morbi feugiat finibus congue. Aenean et condimentum nunc, aliquet hendrerit magna. Aenean non lacinia ex. Integer nec consequat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus est nunc. In semper risus orci, sed semper metus bibendum sit amet. Aenean vel feugiat neque. Suspendisse potenti. Quisque ipsum tortor, auctor luctus commodo vel, gravida sit amet dolor. Ut tincidunt orci ut nulla eleifend, vitae sodales eros faucibus. Vestibulum eleifend felis lectus, scelerisque porttitor diam egestas vel. Phasellus purus massa, finibus nec ex eget, ultricies condimentum orci. Fusce efficitur scelerisque tellus, at consequat ligula facilisis ac.

        Nulla vulputate eget justo porttitor congue. Donec et ipsum vel massa tempus placerat. Fusce ut porta orci, in mollis elit. Nullam bibendum in dolor eget facilisis. Ut eget urna a augue bibendum pellentesque. Praesent lorem lectus, sodales in accumsan id, accumsan nec mi. Fusce ultrices lacinia nunc nec malesuada. Sed tristique turpis vel orci scelerisque ornare. Nulla sagittis porttitor augue et eleifend.
      </div>
      {showConsentBanner1 && (
        <ConsentBannerContainer
          text={text}
          dir={dir}
          script={script}
          service={service}
          shortText={shortText}
          onAccept={() => {
            setShowConsentBanner1(false);
            setShowConsentBanner2(true);
          }}
        />
      )}
      {showConsentBanner2 && (
        <ConsentBannerContainer
          text={text}
          dir={dir}
          script={script}
          service={service}
          shortText={shortText}
          onAccept={() => {
            setShowConsentBanner2(false);
          }}
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
