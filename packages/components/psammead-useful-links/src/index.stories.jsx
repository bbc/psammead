import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import {
  UsefulLink,
  UsefulLinksLi,
  UsefulLinksUl,
  UsefulLinkItem,
} from './index';
import SectionLabel from '../../psammead-section-label/src';
import notes from '../README.md';

const usefulCaptions = [
  'Mitocinmu da sauko da sautin labarai',
  'Labaran BBC Hausa a text',
  'Abokan huldar BBC Hausa',
  'Timi Frank: Osinbajo ya maka mutum biyu',
  'Gwaninta ba ta karbi wani dan Nijeriya',
];

const generateStory = ({ usefulItems, strapline }) =>
  inputProvider({
    // eslint-disable-next-line react/prop-types
    componentFunction: ({ script, service }) => {
      return (
        <>
          {strapline && (
            <SectionLabel
              script={script}
              labelId="example-section-label"
              service={service}
            >
              Useful links
            </SectionLabel>
          )}
          {usefulItems.length === 1 ? (
            <UsefulLink script={script} service={service}>
              {usefulItems[0]}
            </UsefulLink>
          ) : (
            <UsefulLinksUl>
              {usefulItems.map(item => {
                return (
                  <UsefulLinksLi key={usefulItems.indexOf(item)}>
                    <UsefulLinkItem service={service} sript={script}>
                      {item}
                    </UsefulLinkItem>
                  </UsefulLinksLi>
                );
              })}
            </UsefulLinksUl>
          )}
        </>
      );
    },
  });

storiesOf('Components|UsefulLinks', module)
  .addDecorator(withKnobs)
  .add(
    'one link',
    generateStory({
      usefulItems: usefulCaptions.slice(0, 1),
      strapline: false,
    }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'multiple links',
    generateStory({ usefulItems: usefulCaptions, strapline: false }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'with section label',
    generateStory({ usefulItems: usefulCaptions, strapline: true }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  );
