import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import UsefulLinks from './index';

const usefulItems = [
  'Mitocinmu da sauko da sautin labarai',
  'Labaran BBC Hausa a text',
  'Abokan huldar BBC Hausa',
];

describe('UsefulLinks', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <UsefulLinks usefulItems={usefulItems} />,
  );

  it('should test example template', () => {
    const { container } = render(<UsefulLinks usefulItems={usefulItems} />);
    expect(container.querySelector('h2').textContent).toEqual('Useful links');
  });
});
