import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { CanonicalDropdown, DropdownNavigationLi } from './index';
import pidginNavData from '../../testHelpers/pidgin';

describe('Navigation', () => {
  shouldMatchSnapshot(
    'dropdown should render correctly',
    <CanonicalDropdown>
      {pidginNavData.map((item, index) => {
        const active = index === 0;
        const { title, url } = item;

        return (
          <DropdownNavigationLi
            script={latin}
            service="news"
            url={url}
            active={active}
            currentPageText="Current page"
          >
            {title}
          </DropdownNavigationLi>
        );
      })}
    </CanonicalDropdown>,
  );
});
