/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, number, withKnobs } from '@storybook/addon-knobs';
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
const rankTypeSize = ['foolscap', 'trafalgar'];
const linkTypeSize = ['greatprimer', 'pica'];

const renderList = ({
  numberOfItems,
  dir,
  service,
  script,
  withTimestamp,
  columnLayout,
  rankTypography,
  linkTypography,
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
      rankTypography,
      linkTypography,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({
  dir,
  service,
  script,
  withTimestamp,
  linkTypography,
  rankTypography,
}) => {
  const item = getItem({ service, withTimestamp });
  return (
    <MostReadLink
      dir={dir}
      href={item.href}
      service={service}
      script={script}
      title={item.title}
      linkTypography={linkTypography}
      rankTypography={rankTypography}
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
  rankTypography,
}) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
    columnlayout={columnLayout}
    rankTypography={rankTypography}
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
          rankTypography: select('Rank Typography', rankTypeSize, 'foolscap'),
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
        linkTypography: select('Link Typography', linkTypeSize, 'greatprimer'),
        rankTypography: select('Rank Typography', rankTypeSize, 'foolscap'),
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
          rankTypography: select('Rank Typography', rankTypeSize, 'foolscap'),
          linkTypography: select(
            'Link Typography',
            linkTypeSize,
            'greatprimer',
          ),
        }),
      ),
    {
      notes,
    },
  );
