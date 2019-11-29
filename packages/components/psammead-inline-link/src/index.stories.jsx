import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import {
  getSansRegular,
  getSansBold,
  getSansRegularItalic,
  getSansBoldItalic,
} from '@bbc/psammead-styles/font-styles';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import notes from '../README.md';
import InlineLink from './index';

const RegularParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
`;
const BoldParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansBold(service)}
`;
const ItalicParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegularItalic(service)}
`;
const BoldItalicParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansBoldItalic(service)}
`;

storiesOf('Components|InlineLink', module)
  .addDecorator(withKnobs())
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text }) => (
      <>
        <InlineLink href="https://www.bbc.com/news">{text}</InlineLink>
        <br />
        <br />
        Please note this component does not have its own typography styling
        (font-size, font-family and line-height) as it is expected to be used
        within another component such as paragraph or caption. For a more
        realistic storybook example of this component see the Paragraph and
        Caption stories - this should be removed in
        https://github.com/bbc/psammead/issues/733
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'inline-link inside a regular paragraph',
    ({ text, longText, script, service }) => (
      <>
        <RegularParagraph script={script} service={service}>
          {longText}{' '}
          <InlineLink href="https://www.bbc.com/news">{text}</InlineLink>{' '}
          {longText}
        </RegularParagraph>
        <br />
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'inline-link inside a bold paragraph',
    ({ text, longText, script, service }) => (
      <>
        <BoldParagraph script={script} service={service}>
          {longText}{' '}
          <InlineLink href="https://www.bbc.com/news">{text}</InlineLink>{' '}
          {longText}
        </BoldParagraph>
        <br />
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'inline-link inside a italic paragraph',
    ({ text, longText, script, service }) => (
      <>
        <ItalicParagraph script={script} service={service}>
          {longText}{' '}
          <InlineLink href="https://www.bbc.com/news">{text}</InlineLink>{' '}
          {longText}
        </ItalicParagraph>
        <br />
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'inline-link inside a bold and italic paragraph',
    ({ text, longText, script, service }) => (
      <>
        <BoldItalicParagraph script={script} service={service}>
          {longText}{' '}
          <InlineLink href="https://www.bbc.com/news">{text}</InlineLink>{' '}
          {longText}
        </BoldItalicParagraph>
        <br />
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'experimental styled inline link with text-decoration style',
    ({ text, longText, script, service }) => (
      <>
        <RegularParagraph script={script} service={service}>
          {longText}{' '}
          <InlineLink
            style={{
              borderBottom: 'none',
              textDecoration: `underline ${C_POSTBOX}`,
            }}
            href="https://www.bbc.com/news"
          >
            {text}
          </InlineLink>{' '}
          {longText}
        </RegularParagraph>
        <br />
        <br />
        Please note this an experimental example of inline link styled with
        text-decoration: underline instead of border-bottom: solid. This has
        only been implemented for this storybook example. This experiment is a
        part of this issue: https://github.com/bbc/psammead/issues/2706
      </>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
