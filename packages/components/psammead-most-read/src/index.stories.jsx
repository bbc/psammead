/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  select,
  boolean,
  number,
  withKnobs,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { getItem, getItemWrapperArray } from './utilities';
import { MostReadRank, MostReadLink, MostReadList } from './index';
import notes from '../README.md';

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
const typeSize = { default: 'default', pica: 'pica', trafalgar: 'trafalgar' };

const optionsDisplay = {
  display: 'multi-select',
};

const renderList = ({
  numberOfItems,
  dir,
  service,
  script,
  withTimestamp,
  columnLayout,
  typography,
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
      typography,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({ dir, service, script, withTimestamp, typography }) => {
  const item = getItem({ service, withTimestamp });
  return (
    <MostReadLink
      dir={dir}
      href={item.href}
      service={service}
      script={script}
      title={item.title}
      typography={typography}
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
  typography,
}) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
    columnlayout={columnLayout}
    typography={typography}
  />
);

storiesOf('Components|MostRead/Rank', module)
  .addDecorator(withKnobs)
  .add(`default`, () =>
    newsServiceDecorator(
      ({ dir, script, service }) =>
        renderRank({
          dir,
          service,
          script,
          listIndex: number('Number (1 - 10)', 5, listIndexRange),
          numberOfItems: 10,
          typography: select('Typography', typeSize, typeSize.default),
        }),
      {
        notes,
      },
    ),
  );

storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    `default`,
    ({ dir, script, selectedService }) =>
      renderLink({
        dir,
        script,
        service: selectedService,
        withTimestamp: boolean('Timestamp', false),
        typography: select('Typography', typeSize, typeSize.default),
      }),
    {
      notes,
    },
  );

storiesOf('Components|MostRead/List', module)
  .addDecorator(withKnobs)
  .add(
    `default`,
    () =>
      newsServiceDecorator(({ dir, script, selectedService }) =>
        renderList({
          numberOfItems: number('Number (1 - 10)', 10, listIndexRange),
          columnLayout: select('Page Type (columns)', pageTypes, 'multiColumn'),
          withTimestamp: boolean('Timestamp', false),
          service: selectedService,
          dir,
          script,
          typography: options(
            'Typography',
            typeSize,
            typeSize.default,
            optionsDisplay,
          ),
        }),
      ),
    {
      notes,
    },
  );
