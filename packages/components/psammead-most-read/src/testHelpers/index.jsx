import React from 'react';
import { shape, string, oneOf, number } from 'prop-types';
import { TEXT_VARIANTS } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Timestamp from '@bbc/psammead-timestamp';
import {
  MostReadTitle,
  MostReadList,
  MostReadItemWrapper,
  MostReadLink,
  MostReadRank,
} from '..';

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
    id: Math.floor(Math.random() * 100000) + 1,
    title: text,
    href: `${baseUrl}${articlePath}`,
    timestamp,
  };
};

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

export const renderMostRead = ({
  service,
  script,
  dir,
  header,
  numberOfItems,
}) => (
  <>
    <MostReadTitle
      header={header}
      service={service}
      script={script}
      dir={dir}
    />
    <MostReadList numberOfItems={numberOfItems} dir={dir}>
      {getItemWrapperArray({
        numberOfItems,
        service,
        script,
        dir,
      }).map(item => item)}
    </MostReadList>
  </>
);

renderMostRead.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
  header: string.isRequired,
  numberOfItems: number.isRequired,
};

renderMostRead.defaultProps = {
  dir: 'ltr',
};
