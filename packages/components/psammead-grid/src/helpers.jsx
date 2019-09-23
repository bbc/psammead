import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Paragraph from '@bbc/psammead-paragraph';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const Item = styled.div`
  grid-column: ${props => props.startAtCol} / span ${props => props.span};
`;

export const ItemWithConfig = styled.div`
  @media (min-width: ${props => props.breakpointMin}) and (max-width: ${props =>
      props.breakpointMax}) {
    grid-column: ${props => props.start} / span ${props => props.span};
  }
`;

export const ItemMultiConfig = styled.div`
  @media (min-width: ${props =>
      props.layouts[0].breakpointMin}) and (max-width: ${props =>
      props.layouts[0].breakpointMax}) {
    grid-column: ${props => props.layouts[0].start} / span
      ${props => props.layouts[0].span};
  }
`;

export const ExampleParagraph = ({ number }) => (
  <Paragraph script={cyrillicAndLatin} service="news">
    {number}This is a long paragraph that will wrap for several lines. This is a
    long paragraph that will wrap for several lines. This is a long paragraph
    that will wrap for several lines. This is a long paragraph that will wrap
    for several lines. This is a long paragraph that will wrap for several
    lines. This is a long paragraph that will wrap for several lines. This is a
    long paragraph that will wrap for several lines. This is a long paragraph
    that will wrap for several lines.
  </Paragraph>
);

ExampleParagraph.propTypes = {
  number: string,
};
ExampleParagraph.defaultProps = {
  number: '1',
};
