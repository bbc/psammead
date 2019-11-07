import React from 'react';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

export default ({
  defaultService = 'news',
  services = Object.keys(LANGUAGE_VARIANTS),
} = {}) => storyFn => {
  const includesService = service => services.includes(service);
  const service = select(
    'Select a service',
    services.filter(includesService),
    defaultService,
  );
  const { text, script, locale, dir = 'ltr' } = LANGUAGE_VARIANTS[service];
  const storyProps = { text, script: scripts[script], locale, dir, service };
  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn(storyProps)}
    </>
  );
};
