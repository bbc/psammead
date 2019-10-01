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
import notes from '../README.md';

const usefulCaptions = [
  {
    name: 'Mitocinmu da sauko da sautin labarai',
    url: 'https://www.bbc.com/igbo/afirika-49883577',
  },
  {
    name: 'Labaran BBC Hausa a text',
    url: 'https://www.bbc.com/igbo/afirika-49872694',
  },
  {
    name: 'Abokan huldar BBC Hausa',
    url: 'https://www.bbc.com/igbo/afirika-49869003',
  },
  {
    name: 'Timi Frank: Osinbajo ya maka mutum biyu',
    url: 'https://www.bbc.com/igbo/afirika-49883189',
  },
  {
    name: 'Gwaninta ba ta karbi wani dan Nijeriya',
    url: 'https://www.bbc.com/igbo/afirika-49869001',
  },
];

const generateStory = ({ usefulItems }) =>
  inputProvider({
    // eslint-disable-next-line react/prop-types
    componentFunction: ({ script, service }) => {
      return (
        <>
          {usefulItems.length === 1 ? (
            <UsefulLink
              script={script}
              service={service}
              url={usefulItems[0].url}
            >
              {usefulItems[0].name}
            </UsefulLink>
          ) : (
            <UsefulLinksUl>
              {usefulItems.map(item => {
                return (
                  <UsefulLinksLi key={usefulItems.indexOf(item)}>
                    <UsefulLinkItem
                      service={service}
                      script={script}
                      href={item.url}
                    >
                      {item.name}
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
    }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'multiple links',
    generateStory({
      usefulItems: usefulCaptions,
    }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  );
