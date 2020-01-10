import React from 'react';
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp';
import { MostReadItemWrapper, MostReadLink } from '../Item';
import MostReadRank from '../Rank';

const lastUpdated = (script, service) => (
  // This will return the provided english translations
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
);

export const getItem = (service, withTimestamp = false) => {
  const baseUrl = 'https://www.bbc.com';
  const { text, articlePath } = TEXT_VARIANTS[service];
  const timestamp = withTimestamp ? lastUpdated(latin, service) : null;
  return {
    id: `${Math.floor(Math.random() * 100000) + 1}`,
    title: text,
    href: `${baseUrl}${articlePath}`,
    timestamp,
  };
};

export const getItems = (service = 'news', arraySize) =>
  Array.from({ length: arraySize }, () => getItem(service));

export const getItemWrapperArray = ({
  numberOfItems,
  service,
  script,
  dir,
}) => {
  const itemWrapperArray = [];

  for (let i = 1; i <= numberOfItems; i += 1) {
    itemWrapperArray.push(
      <MostReadItemWrapper dir={dir} key={i}>
        <MostReadRank
          service={service}
          script={script}
          listIndex={i}
          numberOfItems={numberOfItems}
          dir={dir}
        />
        <MostReadLink
          dir={dir}
          href={getItem(service).href}
          service={service}
          script={script}
          title={getItem(service).title}
        />
      </MostReadItemWrapper>,
    );
  }
  return itemWrapperArray;
};
