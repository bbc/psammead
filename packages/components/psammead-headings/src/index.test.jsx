import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { Headline, SubHeading } from './index';

describe('Headline component', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Headline script={latin}>This is my headline.</Headline>,
  );
});

describe('SubHeading component', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <SubHeading text="This is a SubHeading" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without quotes',
    <SubHeading text="This 'is' a SubHeading" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without double quotes',
    <SubHeading text='This "is" a SubHeading' script={latin}>
      This is a SubHeading
    </SubHeading>,
  );

  shouldMatchSnapshot(
    'attribute id should render without exclamation marks',
    <SubHeading text="This is! a SubHeading!" script={latin}>
      This is a SubHeading
    </SubHeading>,
  );
});
