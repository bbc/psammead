import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import InlineLink from './index';

storiesOf('Components|InlineLink', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider([{ name: 'Link text' }], ([linkText]) => (
      <Fragment>
        <InlineLink href="https://www.bbc.com/news">{linkText}</InlineLink>
        <br />
        <br />
        Please note this component does not have its own typography styling
        (font-size and line-height) as it is expected to be used within another
        component such as paragraph or caption. For a more realistic storybook
        example of this component see the Paragraph and Caption stories - this
        should be removed in https://github.com/bbc/psammead/issues/733
      </Fragment>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
