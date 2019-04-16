import React from 'react';

import {
  shouldMatchSnapshot,
  testUtilityPackages,
} from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';
import * as svgsFromSrc from './src/svgs';
import * as ampBoilerplate from './amp-boilerplate';
import * as ampBoilerplateFromSrc from './src/amp-boilerplate';

const ampBoilerplateExpectedExports = {
  AMP_SCRIPT: 'string',
  AMP_NO_SCRIPT: 'string',
};

const svgsExpectedExports = {
  BBC_BLOCKS: 'string',
  news: 'object',
  yoruba: 'object',
  igbo: 'object',
  thai: 'object',
  pidgin: 'object',
};

const expectedExports = {
  svgs: svgsExpectedExports,
  ampBoilerplate: ampBoilerplateExpectedExports,
};

const actualExports = {
  svgs,
  ampBoilerplate,
};

const actualExportsFromSrc = {
  svgs: svgsFromSrc,
  ampBoilerplate: ampBoilerplateFromSrc,
};

describe('Psammead assets', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(actualExports, expectedExports, 'psammead-assets');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      actualExportsFromSrc,
      expectedExports,
      'psammead-assets',
    );
  });
});

const { news, yoruba, igbo, pidgin, thai } = svgs;

describe('News Svg', () => {
  shouldMatchSnapshot(
    'should render news svg correctly',
    <svg viewBox={`${svgs.news.viewbox.width} ${svgs.news.viewbox.height}`}>
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
