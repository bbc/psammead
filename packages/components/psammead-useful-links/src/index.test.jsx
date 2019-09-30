import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import {
  UsefulLink,
  UsefulLinksLi,
  UsefulLinksUl,
  UsefulLinkItem,
} from './index';

const usefulCaptions = [
  'Mitocinmu da sauko da sautin labarai',
  'Labaran BBC Hausa a text',
  'Abokan huldar BBC Hausa',
  'Timi Frank: Osinbajo ya maka mutum biyu',
  'Gwaninta ba ta karbi wani dan Nijeriya',
];

describe('One useful item', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <UsefulLink usefulItems={usefulCaptions[0]} />,
  );
});

describe('Multiple useful items', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <UsefulLinksUl>
      {usefulCaptions.map(item => {
        return (
          <UsefulLinksLi>
            <UsefulLinkItem>{item}</UsefulLinkItem>
          </UsefulLinksLi>
        );
      })}
    </UsefulLinksUl>,
  );
});
