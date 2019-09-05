import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Helmet } from 'react-helmet';
import { arrayOf, shape, string, element } from 'prop-types';
import * as scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

const inputProvider = khoa => () => {
  let serviceNames = Object.keys(LANGUAGE_VARIANTS);
  console.log(khoa);
  const services = 'khoa';
  const options = {};
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
  const slots = khoa.slots;
  console.log(slots);
  const slotTexts = (slots || []).map(({ defaultText }) => {
    //   // Expect defaultText to be in English. When it is provided and we're
    //   // displaying English language on the story, set the default text for
    //   // this knob to defaultText.
    //   // When we switch to a language other than English, set the
    //   // text for the slot to the snippet from LANGUAGE_VARIANTS for that
    //   // language.
    return defaultText && isNews ? defaultText : service.text;
  });

  const script = scripts[service.script];
  const dir = service.dir || 'ltr';
  const { locale } = service;

  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {khoa.componentFunction({
        slotTexts,
        script,
        dir,
        locale,
        service: serviceName,
      })}
    </>
  );
};

inputProvider.propTypes = {
  slots: arrayOf(
    shape({
      name: string,
      defaultText: string,
    }),
  ),
  componentFunction: element,
  services: arrayOf(string),
  options: shape({ defaultService: string }),
};

export default inputProvider;
