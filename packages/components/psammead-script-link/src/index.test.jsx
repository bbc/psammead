import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render } from '@testing-library/react';
import { latin } from '@bbc/gel-foundations/scripts';
import ScriptLink from './index';

describe('ScriptLink', () => {
  const props = {
    service: 'news',
    href: 'https://www.bbc.co.uk/news',
    script: latin,
  };

  shouldMatchSnapshot(
    'should render correctly',
    <ScriptLink {...props}>Lat</ScriptLink>,
  );

  it('should render a link', () => {
    const { container } = render(
      <ScriptLink {...props} variant="lat">
        Lat
      </ScriptLink>,
    );
    const links = container.querySelectorAll('a');

    expect(links).toHaveLength(1);
    expect(links[0]).toHaveProperty('href');
    expect(links[0].href).toEqual('https://www.bbc.co.uk/news');
    expect(links[0].textContent).toEqual('Lat');
    expect(links[0].dataset).toHaveProperty('variant');
    expect(links[0].dataset.variant).toEqual('lat');
  });
});
