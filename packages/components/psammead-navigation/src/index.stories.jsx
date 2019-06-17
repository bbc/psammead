import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { select, number, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import * as svgs from '@bbc/psammead-assets/svgs';
import Brand from '@bbc/psammead-brand';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';
import yorubaNavData from '../testHelpers/yoruba';
import notes from '../README.md';

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

storiesOf('Components|Navigation', module)
  .addDecorator(withKnobs)
  .add(
    'igbo with Brand',
    inputProvider([], () => {
      const {
        svgHeightInput,
        minWidthInput,
        maxWidthInput,
        svgChoice,
      } = inputs();

      return (
        <Fragment>
          <Brand
            brandName="Default Brand Name"
            svgHeight={svgHeightInput}
            minWidth={minWidthInput}
            maxWidth={maxWidthInput}
            svg={svgs[svgChoice]}
          />
          <Navigation>
            <NavigationUl>
              {Object.keys(igboNavData).map((item, key) => {
                const { title, url } = igboNavData[item];

                let active;
                if (key === 0) {
                  active = true;
                }

                return (
                  <NavigationLi
                    key={title}
                    url={url}
                    script={latin}
                    active={active}
                  >
                    {title}
                  </NavigationLi>
                );
              })}
            </NavigationUl>
          </Navigation>
        </Fragment>
      );
    }),
    {
      notes,
    },
  )
  .add(
    'pidgin',
    () => (
      <Navigation>
        <NavigationUl>
          {Object.keys(pidginNavData).map((item, key) => {
            const { title, url } = pidginNavData[item];

            let active;
            if (key === 0) {
              active = true;
            }

            return (
              <NavigationLi
                key={title}
                url={url}
                script={latin}
                active={active}
              >
                {title}
              </NavigationLi>
            );
          })}
        </NavigationUl>
      </Navigation>
    ),
    {
      notes,
    },
  )
  .add(
    'yoruba',
    () => (
      <Navigation>
        <NavigationUl>
          {Object.keys(yorubaNavData).map((item, key) => {
            const { title, url } = yorubaNavData[item];

            let active;
            if (key === 0) {
              active = true;
            }

            return (
              <NavigationLi
                key={title}
                url={url}
                script={latin}
                active={active}
              >
                {title}
              </NavigationLi>
            );
          })}
        </NavigationUl>
      </Navigation>
    ),
    {
      notes,
    },
  );
