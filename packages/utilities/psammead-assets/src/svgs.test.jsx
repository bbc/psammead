import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';

Object.keys(svgs)
  .filter(key => key !== 'BBC_BLOCKS')
  .forEach(key => {
    describe(`${key} SVG`, () => {
      shouldMatchSnapshot(
        'should render correctly',
        <svg viewBox={`${svgs[key].viewbox.width} ${svgs[key].viewbox.height}`}>
          {svgs[key].group}
        </svg>,
      );
    });
  });
