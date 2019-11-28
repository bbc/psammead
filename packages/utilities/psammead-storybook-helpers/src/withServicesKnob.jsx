import React from 'react';
import path from 'ramda/src/path';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import TEXT_EXAMPLES from './text-variants';

const DEFAULT_SERVICE = 'news';
const SERVICES_LIST = Object.keys(TEXT_EXAMPLES);
const getVariant = selectedService => path([selectedService, 'variant']);
const getService = selectedService => path([selectedService, 'service']);
const includesService = services => service => services.includes(service);

export default ({
  defaultService = DEFAULT_SERVICE,
  services = SERVICES_LIST,
} = {}) => storyFn => {
  const selectedService = select(
    'Select a service',
    services.filter(includesService(services)),
    defaultService,
  );

  const variant = getVariant(selectedService)(TEXT_EXAMPLES);

  const service = variant
    ? getService(selectedService)(TEXT_EXAMPLES)
    : selectedService;

  const { text, script, locale, dir = 'ltr' } = TEXT_EXAMPLES[selectedService];

  const storyProps = {
    text,
    script: scripts[script],
    locale,
    dir,
    service,
    variant: variant || 'default',
  };

  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn(storyProps)}
    </>
  );
};
