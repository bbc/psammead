import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { expect } from 'chai';
import Brand from './index';

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Brand brandName="Default Brand Name" />,
  );

  it('chai foo', () => {
    const arr = [];
    expect(arr).to.have.lengthOf(0);
  });
});
