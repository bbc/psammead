import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSansRegular,
  getSansBold,
  getSansRegularItalic,
  getSansBoldItalic,
} from '@bbc/psammead-styles/font-styles';

export const RegularParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
`;

export const BoldParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansBold(service)}
`;

export const ItalicParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegularItalic(service)}
`;

export const BoldItalicParagraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansBoldItalic(service)}
`;

RegularParagraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

BoldParagraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

ItalicParagraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

BoldItalicParagraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default {
  RegularParagraph,
  BoldParagraph,
  ItalicParagraph,
  BoldItalicParagraph,
};
