import React from 'react';
import styled from 'styled-components';
import Paragraph from '@bbc/psammead-paragraph';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

export const Item = styled.div`
  grid-column: ${props => props.startAtCol} / span ${props => props.span};
`;

export const ExampleParagraph = () => (
  <Paragraph script={cyrillicAndLatin} service="news">
    This is a super long paragraph that will wrap for several lines. This is a
    super long paragraph that will wrap for several lines. This is a super long
    paragraph that will wrap for several lines. This is a super long paragraph
    that will wrap for several lines. This is a super long paragraph that will
    wrap for several lines. This is a super long paragraph that will wrap for
    several lines. This is a super long paragraph that will wrap for several
    lines. This is a super long paragraph that will wrap for several lines.
  </Paragraph>
);
