import { boolean, text, select } from '@storybook/addon-knobs';
import { LANGUAGE_VARIANTS } from './text-variants';

/* eslint-disable import/prefer-default-export */
export const inputProvider = (names, componentFunction) => () => {
  const inputs = names.map(name =>
    boolean(`Show presets for ${name}`, false, name)
      ? select(
          `Content for ${name}`,
          LANGUAGE_VARIANTS,
          LANGUAGE_VARIANTS.News,
          name,
        )
      : text(`Content for ${name}`, 'Enter sample text', name),
  );

  return componentFunction(...inputs);
};
