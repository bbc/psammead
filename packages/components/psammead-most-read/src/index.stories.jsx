/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number, withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { getItem, getItemWrapperArray } from './utilities';
import { MostReadRank, MostReadLink, MostReadList } from './index';

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});
const listIndexRange = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
};

const pageTypes = ['oneColumn', 'twoColumn', 'multiColumn'];
const sizes = ['default', 'small'];

const renderList = ({
  numberOfItems,
  dir,
  service,
  script,
  withTimestamp,
  columnLayout,
  size,
}) => (
  <MostReadList
    numberOfItems={numberOfItems}
    dir={dir}
    columnLayout={columnLayout}
  >
    {getItemWrapperArray({
      numberOfItems,
      service,
      script,
      dir,
      withTimestamp,
      columnLayout,
      size,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({ dir, service, script, withTimestamp, size }) => {
  const item = getItem({ service, withTimestamp });
  return (
    <MostReadLink
      dir={dir}
      href={item.href}
      service={service}
      script={script}
      title={item.title}
      size={size}
    >
      {item.timestamp}
    </MostReadLink>
  );
};

const renderRank = ({
  dir,
  service,
  script,
  listIndex,
  numberOfItems,
  columnLayout,
  size,
}) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
    columnlayout={columnLayout}
    size={size}
  />
);

storiesOf('Components/MostRead/Rank', module)
  .addDecorator(withKnobs)
  .add(`default`, () =>
    newsServiceDecorator(({ dir, script, service }) =>
      renderRank({
        dir,
        service,
        script,
        listIndex: number('Number (1 - 10)', 5, listIndexRange),
        numberOfItems: 10,
        size: select('Size', sizes, 'default'),
      }),
    ),
  );

storiesOf('Components/MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(`default`, ({ dir, script, selectedService }) =>
    renderLink({
      dir,
      script,
      service: selectedService,
      withTimestamp: boolean('Timestamp', false),
      size: select('Size', sizes, 'default'),
    }),
  );

storiesOf('Components/MostRead/List', module)
  .addDecorator(withKnobs)
  .add(`default`, () =>
    newsServiceDecorator(({ dir, script, selectedService }) =>
      renderList({
        numberOfItems: number('Number (1 - 10)', 10, listIndexRange),
        columnLayout: select('Page Type (columns)', pageTypes, 'multiColumn'),
        withTimestamp: boolean('Timestamp', false),
        service: selectedService,
        dir,
        script,
        size: select('Size', sizes, 'default'),
      }),
    ),
  );
