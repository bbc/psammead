import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  RegularParagraph,
  BoldParagraph,
  ItalicParagraph,
  BoldItalicParagraph,
} from './styledParagraph';

describe('Paragraph', () => {
  shouldMatchSnapshot(
    'should render a RegularParagraph',
    <RegularParagraph script={latin} service="news">
      This is text in a paragraph styled with SansRegular.
    </RegularParagraph>,
  );

  shouldMatchSnapshot(
    'should render a RegularParagraph',
    <BoldParagraph script={latin} service="news">
      This is text in a paragraph styled with SansBold.
    </BoldParagraph>,
  );

  shouldMatchSnapshot(
    'should render a RegularParagraph',
    <ItalicParagraph script={latin} service="news">
      This is text in a paragraph styled with SansRegularItalic.
    </ItalicParagraph>,
  );

  shouldMatchSnapshot(
    'should render a RegularParagraph',
    <BoldItalicParagraph script={latin} service="news">
      This is text in a paragraph styled with SansBolditalic.
    </BoldItalicParagraph>,
  );
});
