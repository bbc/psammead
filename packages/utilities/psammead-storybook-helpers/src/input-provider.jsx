import React, { Fragment } from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Helmet } from 'react-helmet';
import scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

const inputProvider = (slots, componentFunction) => () => {
  const lang = select(
    'Select a language',
    LANGUAGE_VARIANTS,
    LANGUAGE_VARIANTS.English,
  );

  // `select` doesn't return name of language selected, so test if selection is English
  // by comparing `text` to English's `text`
  const isEnglish = lang.text === LANGUAGE_VARIANTS.English.text;

  const inputs = slots.map(({ name, defaultText }) =>
    text(
      `Content for ${name}`,
      // Only display slot default text when it exists and we're displaying English language.
      defaultText && isEnglish ? defaultText : lang.text,
    ),
  );

  const script = scripts[lang.script];
  const dir = lang.dir || 'ltr';

  return (
    <Fragment>
      <Helmet htmlAttributes={{ dir }} />
      {componentFunction(inputs, script, dir)}
    </Fragment>
  );
};

export default inputProvider;
