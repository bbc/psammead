import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../README.md';
import SitewideLinks from './index';

const link = name => ({
  href: 'https://www.bbc.co.uk/news',
  text: `Link ${name}`,
});

const links = [link(1), link(2), link(3), link(4), link(5), link(6), link(7)];

storiesOf('SitewideLinks', module)
  .add('default', () => (
    <SitewideLinks
      links={links}
      copyrightText="Text here. "
      externalLink={link('last')}
    />
  ), { notes: Readme });
