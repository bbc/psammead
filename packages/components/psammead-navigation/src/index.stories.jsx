import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Navigation, { NavigationUl, NavigationLi } from './index';
import igboNavData from '../testHelpers/igbo';
import pidginNavData from '../testHelpers/pidgin';
import yorubaNavData from '../testHelpers/yoruba';
import notes from '../README.md';

storiesOf('Components|Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)

  .add(
    'igbo',
    ({ dir }) => (
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
                dir={dir}
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
    'pidgin',
    ({ dir }) => (
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
                dir={dir}
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
    ({ dir }) => (
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
                dir={dir}
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
