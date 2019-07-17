import React, { Fragment } from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Helmet } from 'react-helmet';
import scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

const inputProvider = (slots, componentFunction, services) => () => {
  let serviceNames = Object.keys(LANGUAGE_VARIANTS);

  if (services) {
    serviceNames = serviceNames.filter(service => services.includes(service));
  }

  const serviceName = select('Select a service', serviceNames, 'news');

  const service = LANGUAGE_VARIANTS[serviceName];
  const isNews = serviceName === 'news';

  const slotTexts = (slots || []).map(({ name, defaultText }) =>
    text(
      `Content for ${name}`,
      // Expect defaultText to be in English. When it is provided and we're
      // displaying English language on the story, set the default text for
      // this knob to defaultText.
      // When we switch to a language other than English, set the default
      // text for the knob to the snippet from LANGUAGE_VARIANTS for that
      // language.
      defaultText && isNews ? defaultText : service.text,
    ),
  );

  const script = scripts[service.script];
  const dir = service.dir || 'ltr';
  const { locale } = service;

  return (
    <Fragment>
      <Helmet htmlAttributes={{ dir }} />
      {componentFunction({
        slotTexts,
        script,
        dir,
        locale,
        service: serviceName,
      })}
    </Fragment>
  );
};

export default inputProvider;
