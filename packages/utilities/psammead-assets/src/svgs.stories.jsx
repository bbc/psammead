import React from 'react';
import styled from 'styled-components';
import { node, number, shape } from 'prop-types';
import { storiesOf } from '@storybook/react';
import { number as numberKnob, withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import * as svgs from './svgs';

const Svg = styled.svg`
  display: block;
  fill: #fff;
`;

const Container = styled.div`
  background-color: black;
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
  group: svgs.news.group,
  ratio: svgs.news.ratio,
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

const stories = storiesOf('SVGs', module).addDecorator(withKnobs);

Object.keys(svgs)
  .filter(svgName => svgName !== 'BBC_BLOCKS')
  .forEach(svgName => {
    stories.add(
      key,
      () => {
        const height = numberKnob('Height', 24);
        return getSVG({ ...svgs[key], height });
      },
      { notes },
    );
  });
