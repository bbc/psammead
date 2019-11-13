import React from 'react';
import { node, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

export const MostReadRank = styled.span`
  ${({ script }) => script && getFoolscap(script)};
  ${({ service }) => getSerifLight(service)}
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  display: inline-block;
  min-width: 3rem;
`;

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  text-decoration: none;
  align: top;
  
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const MostReadItem = ({
  lastUpdated,
  script,
  service,
  item: { title, href },
}) => (
  <>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {lastUpdated}
  </>
);

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

MostReadItem.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  lastUpdated: node,
  item: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

MostReadItem.defaultProps = {
  lastUpdated: null,
};
