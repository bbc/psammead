import React from 'react';
import { Helmet } from 'react-helmet';
import { select } from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import EXAMPLES from './text-variants';

const DEFAULT_SERVICE = 'news';
const SERVICES_LIST = Object.keys(EXAMPLES);

export default ({
  defaultService = DEFAULT_SERVICE,
  services = SERVICES_LIST,
} = {}) => storyFn => {
  const getServiceAndVariant = selectedItem =>
    EXAMPLES[selectedItem].variant
      ? {
          service: EXAMPLES[selectedItem].service,
          variant: EXAMPLES[selectedItem].variant,
        }
      : { service: selectedItem };

  const includesSelectedService = selectedItem =>
    services.includes(selectedItem);

  const selectedItem = select(
    'Select a service',
    services.filter(includesSelectedService),
    defaultService,
  );

  const { text, script, locale, dir = 'ltr' } = EXAMPLES[selectedItem];

  const storyProps = {
    text,
    script: scripts[script],
    locale,
    dir,
    ...getServiceAndVariant(selectedItem),
  };
  return (
    <>
      <Helmet htmlAttributes={{ dir }} />
      {storyFn(storyProps)}
    </>
  );
};
