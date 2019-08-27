import React, { Fragment } from 'react';
import { select } from '@storybook/addon-knobs';
import { Helmet } from 'react-helmet';
import * as scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

const inputProvider = ({
  slots,
  componentFunction,
  services,
  options = {},
}) => () => {
  let serviceNames = Object.keys(LANGUAGE_VARIANTS);

  if (services) {
    serviceNames = serviceNames.filter(service => services.includes(service));
  }

  const serviceName = select(
    'Select a service',
    serviceNames,
    options.defaultService || 'news',
  );

  const service = LANGUAGE_VARIANTS[serviceName];
  const isNews = serviceName === 'news';

  const slotTexts = (slots || []).map(({ defaultText }) => {
    // Expect defaultText to be in English. When it is provided and we're
    // displaying English language on the story, set the default text for
    // this knob to defaultText.
    // When we switch to a language other than English, set the
    // text for the slot to the snippet from LANGUAGE_VARIANTS for that
    // language.
    return defaultText && isNews ? defaultText : service.text;
  });

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
