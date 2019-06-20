import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select, number, withKnobs } from '@storybook/addon-knobs';
import { inputProvider, dirDecorator } from '@bbc/psammead-storybook-helpers';
import * as svgs from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Brand from '@bbc/psammead-brand';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';
import yorubaNavData from '../testHelpers/yoruba';
import notes from '../README.md';

const navStoriesData = [
  {
    title: 'igbo with Brand',
    skipLinkText: 'Wụga n’ọdịnaya',
    currentPageText: 'Current page',
    data: igboNavData,
    brand: true,
  },
  {
    title: 'pidgin',
    skipLinkText: 'Waka go wetin de inside',
    currentPageText: 'Current page',
    data: pidginNavData,
  },
  {
    title: 'yoruba',
    skipLinkText: 'Fò kọjá sí nnkan tí ó wà nínú rẹ̀',
    currentPageText: 'Current page',
    data: yorubaNavData,
  },
];

const offScreenText = (
  <Fragment>
    <span
      // eslint-disable-next-line jsx-a11y/aria-role
      role="text"
    >
      <span lang="en-GB">BBC News</span>, Ìgbò - Akụkọ
    </span>
  </Fragment>
);

const inputs = () => {
  // capitalization is only for presentation purpose on the knob
  const options = Object.keys(svgs)
    .filter(key => key !== 'BBC_BLOCKS')
    .map(key => key.charAt(0).toUpperCase() + key.slice(1));

  const svgChoice = select('Service SVG', options, 'News').toLowerCase();
  const svgRatio = svgs[svgChoice].ratio;
  const svgMaxHeight = 24;
  const svgMinHeight = 16;
  const minWidthInput = number('minimum svg width', svgRatio * svgMinHeight);
  const maxWidthInput = number('maximum svg width', svgRatio * svgMaxHeight);
  const svgHeightInput = number('desired height svg', svgMaxHeight);

  return { svgChoice, svgHeightInput, minWidthInput, maxWidthInput };
};

const getBrand = () => {
  const { svgHeightInput, minWidthInput, maxWidthInput, svgChoice } = inputs();

  return (
    <Brand
      brandName="Default Brand Name"
      svgHeight={svgHeightInput}
      minWidth={minWidthInput}
      maxWidth={maxWidthInput}
      svg={svgs[svgChoice]}
    />
  );
};

const StyledMain = styled.main`
  padding: 0px 1rem;
`;

const navigationStory = (skipLinkText, currentPageText, navData, brand) =>
  inputProvider([], (inp, script, dir) => (
    <Fragment>
      {brand && getBrand()}

      <Navigation script={script} skipLinkText={skipLinkText}>
        <NavigationUl>
          {navData.map((item, key) => {
            const { title, url } = item;

            let active;
            if (key === 0) {
              active = true;
            }

            return (
              <NavigationLi
                key={title}
                url={url}
                script={script}
                dir={dir}
                active={active}
                currentPageText={currentPageText}
              >
                {title}
              </NavigationLi>
            );
          })}
        </NavigationUl>
      </Navigation>
      <StyledMain>
        <VisuallyHiddenText id="content" as="h1" tabIndex="-1">
          {offScreenText}
        </VisuallyHiddenText>
      </StyledMain>
    </Fragment>
  ));

const stories = storiesOf('Components|Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator);

navStoriesData.map(item => {
  const { title, skipLinkText, currentPageText, data, brand } = item;
  return stories.add(
    title,
    navigationStory(skipLinkText, currentPageText, data, brand),
    {
      notes,
    },
  );
});
