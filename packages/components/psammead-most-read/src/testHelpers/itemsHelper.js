import React from 'react';
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { shape, string, number } from 'prop-types';
import Timestamp from '@bbc/psammead-timestamp';

const lastUpdated = (script, service) => (
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
);

export const getItem = service => {
  const baseUrl = 'https://www.bbc.com';
  const { text, articlePath } = TEXT_VARIANTS[service];
  return {
    id: Math.random(),
    title: text,
    href: `${baseUrl}${articlePath}`,
  };
};

export const getItemWithTimestamp = (script, service) => {
  const baseUrl = 'https://www.bbc.com';
  const { text, articlePath } = TEXT_VARIANTS[service];
  return {
    id: Math.random(),
    title: text,
    href: `${baseUrl}${articlePath}`,
    timestamp: lastUpdated(script, service),
  };
};

export const getItems = (service = 'news', number) =>
  Array(number).fill(getItem(service));

export const itemPropTypes = shape({
  id: number,
  title: string,
  href: string,
  timestamp: number,
});
