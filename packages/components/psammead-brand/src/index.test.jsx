import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Brand from './index';

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Brand brandName="Default Brand Name" />,
  );
});

// describe('thing', () => {
//   it('shoud', () => {
//     expect(true).toBe(true);
//   });

// describe('Brand', () => {
//   shouldMatchSnapshot(
//     'should render correctly',
//     <Brand brandName="Default Brand Name" />,
//   );
// });
// });
