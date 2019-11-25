import React from 'react';
import path from 'ramda/src/path';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import TEXT_EXAMPLES from './text-variants';

const DEFAULT_SERVICE = 'news';
const SERVICES_LIST = Object.keys(TEXT_EXAMPLES);
const getVariant = selectedItem => path([selectedItem, 'variant']);
const getService = selectedItem => path([selectedItem, 'service']);
const includesService = services => service => services.includes(service);

export default ({
  defaultService = DEFAULT_SERVICE,
  services = SERVICES_LIST,
} = {}) => storyFn => {
  const selectedItem = select(
    'Select a service',
    services.filter(includesService(services)),
    defaultService,
  );

  const variant = getVariant(selectedItem)(TEXT_EXAMPLES);

  const service = variant
    ? getService(selectedItem)(TEXT_EXAMPLES)
    : selectedItem;

  const { text, script, locale, dir = 'ltr' } = TEXT_EXAMPLES[selectedItem];

  const storyProps = {
    text,
    script: scripts[script],
    locale,
    dir,
    service,
    variant,
  };

  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn(storyProps)}
    </>
  );
};
