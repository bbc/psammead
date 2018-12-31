import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import chai from 'chai';
import Brand from './index';

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Brand brandName="Default Brand Name" />,
  );

  it('chai foo', () => {
    chai.expect([]).to.have.lengthOf(0);
  });
});
