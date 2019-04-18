import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as svgs from '@bbc/psammead-assets/svgs';
import Brand from './index';

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly with News svg',
    <Brand brandName="Default Brand Name" svg={svgs.news} />,
  );
  shouldMatchSnapshot(
    'should render correctly with Igbo service svg',
    <Brand brandName="Default Brand Name" svg={svgs.igbo} />,
  );
  shouldMatchSnapshot(
    'should render correctly with Yoruba service svg',
    <Brand brandName="Default Brand Name" svg={svgs.yoruba} />,
  );
  shouldMatchSnapshot(
    'should render correctly with Thai service svg',
    <Brand brandName="Default Brand Name" svg={svgs.thai} />,
  );
  shouldMatchSnapshot(
    'should render correctly with Pidgin service svg',
    <Brand brandName="Default Brand Name" svg={svgs.pidgin} />,
  );
});
