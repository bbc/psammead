import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Paragraph from '@bbc/psammead-paragraph';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import Image from '@bbc/psammead-image';

export const ExampleParagraph = ({ identifier }) => (
  <Paragraph script={cyrillicAndLatin} service="news">
    {identifier}This is a long paragraph that will wrap for several lines. This
    is a long paragraph that will wrap for several lines. This is a long
    paragraph that will wrap for several lines. This is a long paragraph that
    will wrap for several lines. This is a long paragraph that will wrap for
    several lines. This is a long paragraph that will wrap for several lines.
    This is a long paragraph that will wrap for several lines. This is a long
    paragraph that will wrap for several lines.
  </Paragraph>
);

export const ExampleFigure = styled.figure`
  margin: 0;
  padding: 0;
`;

export const ExampleImage = () => (
  <Image
    alt="Robert Downey Junior in Iron Man"
    src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
    width="640"
  />
);

ExampleParagraph.propTypes = {
  identifier: string,
};
ExampleParagraph.defaultProps = {
  identifier: '1',
};
