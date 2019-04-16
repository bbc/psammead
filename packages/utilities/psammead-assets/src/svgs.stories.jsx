import React from 'react';
import styled from 'styled-components';
import { node, number, shape } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { number as numberKnob, withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import { news, igbo, yoruba, thai, pidgin } from './svgs';

const Svg = styled.svg`
  display: block;
  margin-top: 1.25rem;
  fill: #fff;
`;

const Container = styled.div`
  background: ${C_POSTBOX};
  padding: 1rem;
  height: 100vh;
`;

const getSVG = ({ group, ratio, viewbox, height }) => {
  const width = height * ratio;

  return (
    <Container>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
        height={height}
        width={width}
      >
        {group}
      </Svg>
    </Container>
  );
};

getSVG.defaultProps = {
  group: news.group,
  ratio: news.ratio,
  viewbox: {
    width: 167.95,
    height: 24,
  },
  height: 24,
};

getSVG.propTypes = {
  group: node,
  ratio: number,
  viewbox: shape({
    height: number,
    width: number,
  }),
  height: number,
};

storiesOf('SVGs', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const height = numberKnob('Height', 24);
      const NewsSvg = getSVG({ ...news, height });
      return NewsSvg;
    },
    { notes },
  )
  .add(
    'Igbo',
    () => {
      const height = numberKnob('Height', 24);
      const IgboSvg = getSVG({ ...igbo, height });
      return IgboSvg;
    },
    { notes },
  )
  .add(
    'Yoruba',
    () => {
      const height = numberKnob('Height', 24);
      const YorubaSvg = getSVG({ ...yoruba, height });
      return YorubaSvg;
    },
    { notes },
  )
  .add(
    'Thai',
    () => {
      const height = numberKnob('Height', 24);
      const ThaiSvg = getSVG({ ...thai, height });
      return ThaiSvg;
    },
    { notes },
  )
  .add(
    'Pidgin',
    () => {
      const height = numberKnob('Height', 24);
      const PidginSvg = getSVG({ ...pidgin, height });
      return PidginSvg;
    },
    { notes },
  );
