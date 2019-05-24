import React from 'react';
import { shape, func } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import * as typographies from '@bbc/gel-foundations/typography';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import styled from 'styled-components';

const TypographyText = styled.p`
  ${props =>
    props.script && props.typographyFunc
      ? props.typographyFunc(props.script)
      : ''}
`;

TypographyText.propTypes = {
  script: shape(scriptPropType).isRequired,
  typographyFunc: func.isRequired,
};

const typographyStory = (typographyFunc) =>
  inputProvider([{ name: 'sample text' }], ([text], script) => (
    <TypographyText script={script} typographyFunc={typographyFunc}>
      {text}
    </TypographyText>
  ));

const stories = storiesOf('Typography', module).addDecorator(withKnobs);

Object.keys(typographies)
  .filter(typographyName => !typographyName.match(/^GEL_/))
  .forEach(typographyName => {
    stories.add(typographyName, () =>
      inputProvider([{ name: 'sample text' }], ([text], script) => (
        <TypographyText script={script} typographyFunc={typographyFunc}>
          {text}
        </TypographyText>
    )));
});
