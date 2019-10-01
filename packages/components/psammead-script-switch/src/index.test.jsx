import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import ScriptSwitch from './index';

describe('ScriptSwitch', () => {
  const props = {
    service: 'news',
    href: 'https://www.bbc.co.uk/news',
    script: latin,
  };

  shouldMatchSnapshot(
    'should render correctly',
    <ScriptSwitch {...props}>Lat</ScriptSwitch>,
  );

  it('should render a link', () => {
    const { container } = render(<ScriptSwitch {...props}>Lat</ScriptSwitch>);
    const links = container.querySelectorAll('a');

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveProperty('href');
    expect(links[0].href).toEqual('https://www.bbc.co.uk/news');
    expect(links[0].textContent).toEqual('Lat');
  });
});
