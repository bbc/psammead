import React from 'react';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import EXAMPLES_TEXT from './text-variants';

const DEFAULT_SERVICE = 'news';
const SERVICES_LIST = Object.keys(EXAMPLES_TEXT);

export default ({
  defaultService = DEFAULT_SERVICE,
  services = SERVICES_LIST,
} = {}) => storyFn => {
  const hasVariant = selectedItem =>
    typeof EXAMPLES_TEXT[selectedItem].variant === 'string';

  const getService = selectedItem =>
    hasVariant(selectedItem)
      ? EXAMPLES_TEXT[selectedItem].service
      : selectedItem;

  const getVariant = selectedItem =>
    hasVariant(selectedItem) ? EXAMPLES_TEXT[selectedItem].variant : null;

  const includesSelectedService = selectedItem =>
    services.includes(selectedItem);

  const selectedItem = select(
    'Select a service',
    services.filter(includesSelectedService),
    defaultService,
  );

  const { text, script, locale, dir = 'ltr' } = EXAMPLES_TEXT[selectedItem];

  const storyProps = {
    text,
    script: scripts[script],
    locale,
    dir,
    service: getService(selectedItem),
    variant: getVariant(selectedItem),
  };
  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn(storyProps)}
    </>
  );
};
