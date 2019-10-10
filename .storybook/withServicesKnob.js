import React from 'react';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import { LANGUAGE_VARIANTS } from '@bbc/psammead-storybook-helpers';
import * as scripts from '@bbc/gel-foundations/scripts';

const withServicesKnob = (
  defaultService = 'news',
  services = Object.keys(LANGUAGE_VARIANTS),
) => storyFn => {
  const includesService = service => services.includes(service);
  const service = select(
    'Select a service',
    services.filter(includesService),
    defaultService,
  );
  const language = LANGUAGE_VARIANTS[service];
  const script = scripts[language.script];
  const dir = language.dir || 'ltr';
  const { locale } = language;
  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn({ script, dir, locale, service })}
    </>
  );
};

export default withServicesKnob;
