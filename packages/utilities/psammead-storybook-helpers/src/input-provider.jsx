import React, { Fragment } from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Helmet } from 'react-helmet';
import scripts from '@bbc/gel-foundations/scripts';
import LANGUAGE_VARIANTS from './text-variants';

const inputProvider = (slots, componentFunction) => () => {
  const lang = select(
    'Select a language',
    LANGUAGE_VARIANTS,
    LANGUAGE_VARIANTS.english,
  );

  // `select` doesn't return name of language selected, so test if selection
  // is English by comparing `text` to English's `text`
  const isEnglish = lang.text === LANGUAGE_VARIANTS.english.text;

  const inputs = (slots || []).map(({ name, defaultText }) =>
    text(
      `Content for ${name}`,
      // Expect defaultText to be in English. When it is provided and we're
      // displaying English language on the story, set the default text for
      // this knob to defaultText.
      // When we switch to a language other than English, set the default
      // text for the knob to the snippet from LANGUAGE_VARIANTS for that
      // language.
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
