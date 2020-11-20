import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import * as scripts from '@bbc/gel-foundations/scripts';

import BasicExample from './examples/basic';
import CardCallToAction from './components/card-call-to-action';

describe('Podcast Promo', () => {
  shouldMatchSnapshot(
    'Basic example should match snapshot',
    <BasicExample script={scripts.latin} service="russian" />,
  );

  describe('card-call-to-action', () => {
    it('should be aria-hidden', () => {
      const { container } = render(
        <CardCallToAction script={scripts.latin} service="russian">
          Click Me
        </CardCallToAction>,
      );

      expect(container.querySelector('span')).toHaveAttribute(
        'aria-hidden',
        'true',
      );
    });
  });
});
