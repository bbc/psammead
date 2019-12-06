import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';

export const getItem = service => {
  const baseUrl = 'https://www.bbc.com';
  const { text, articlePath } = TEXT_VARIANTS[service];
  return {
    title: text,
    href: `${baseUrl}${articlePath}`,
  };
};

export const getItems = (service = 'news', number) =>
  Array(number).fill(getItem(service));
