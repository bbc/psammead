import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';

Object.keys(svgs)
  .filter(svgName => svgName !== 'BBC_BLOCKS')
  .forEach(svgName => {
    describe(`${svgName} SVG`, () => {
      shouldMatchSnapshot(
        'should render correctly',
        <svg
          viewBox={`${svgs[svgName].viewbox.width} ${
            svgs[svgName].viewbox.height
          }`}
        >
          {svgs[svgName].group}
        </svg>,
      );
    });
  });
