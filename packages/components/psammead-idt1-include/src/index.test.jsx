import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { render, wait } from '@testing-library/react';
import Idt1Include from './index';
import { readFileSync } from 'fs';

const requireJsSrc = `https://news.files.bbci.co.uk/include/vjassets/js/vendor/require-2.1.20b.min.js`;
const fakeInclude = readFileSync(`${__dirname}/fakeinclude.html`, 'utf8');

describe('Idt1Include', () => {
  shouldMatchSnapshot(
    'should render with require js in head',
    <Idt1Include html={fakeInclude} requireJsSrc={requireJsSrc} />,
  );

  it('should initialise the fake include utilising require js', async () => {
    const { debug, getByText } = render(
      <Idt1Include html={fakeInclude} requireJsSrc={requireJsSrc} />,
    );
    await wait(() => getByText('Initialised include'));
  });
});
