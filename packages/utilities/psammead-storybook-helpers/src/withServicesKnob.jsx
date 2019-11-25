import React from 'react';
import path from 'ramda/src/path';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import EXAMPLES_TEXT from './text-variants';

const DEFAULT_SERVICE = 'news';
const SERVICES_LIST = Object.keys(EXAMPLES_TEXT);
const getVariant = selectedItem => path([selectedItem, 'variant']);
const getService = selectedItem => path([selectedItem, 'service']);
const includesService = services => service => services.includes(service);

export default ({
  defaultService = DEFAULT_SERVICE,
  services = SERVICES_LIST,
} = {}) => storyFn => {
  const hasVariant = selectedItem =>
    Boolean(EXAMPLES_TEXT[selectedItem].variant);

  const selectedItem = select(
    'Select a service',
    services.filter(includesService(services)),
    defaultService,
  );

  const variant = getVariant(selectedItem)(EXAMPLES_TEXT);

  const service = hasVariant(selectedItem)
    ? getService(selectedItem)(EXAMPLES_TEXT)
    : selectedItem;

  const { text, script, locale, dir = 'ltr' } = EXAMPLES_TEXT[selectedItem];

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
