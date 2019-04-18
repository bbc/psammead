import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { news, yoruba, igbo, pidgin, thai } from './svgs';

describe('News Svg', () => {
  shouldMatchSnapshot(
    'should render news svg correctly',
    <svg viewBox={`${news.viewbox.width} ${news.viewbox.height}`}>
      {news.group}
    </svg>,
  );
});

describe('Yoruba Svg', () => {
  shouldMatchSnapshot(
    'should render yoruba service svg correctly',
    <svg viewBox={`${yoruba.viewbox.width} ${yoruba.viewbox.height}`}>
      {yoruba.group}
    </svg>,
  );
});

describe('Igbo Svg', () => {
  shouldMatchSnapshot(
    'should render yoruba service svg correctly',
    <svg viewBox={`${igbo.viewbox.width} ${igbo.viewbox.height}`}>
      {igbo.group}
    </svg>,
  );
});

describe('Pidgin Svg', () => {
  shouldMatchSnapshot(
    'should render pidgin service svg correctly',
    <svg viewBox={`${pidgin.viewbox.width} ${pidgin.viewbox.height}`}>
      {pidgin.group}
    </svg>,
  );
});

describe('Thai Svg', () => {
  shouldMatchSnapshot(
    'should render thai service svg correctly',
    <svg viewBox={`${thai.viewbox.width} ${thai.viewbox.height}`}>
      {thai.group}
    </svg>,
  );
});
