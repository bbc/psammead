import React, { Children } from 'react';
import styled from '@emotion/styled';
import { node } from 'prop-types';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_METAL, C_PEBBLE, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

import { withEpisodeContext } from './helpers';

const BorderedSpan = styled.span`
  padding-right: ${GEL_SPACING};
  margin-right: ${GEL_SPACING};
  border-right: 0.0625rem solid ${C_CLOUD_LIGHT};
`;

const StyledSpan = styled.span`
  ${({ script }) => getBrevier(script)}
  ${({ service }) => getSansRegular(service)}
  color: ${({ darkMode }) => (darkMode ? C_PEBBLE : C_METAL)};
`;

const Metadata = props => {
  const { children, ...otherProps } = props;
  return (
    <StyledSpan {...otherProps}>
      {Children.toArray(children).map((child, i) => {
        const isLastChild = i === Children.count(children) - 1;

        if (isLastChild) {
          return child;
        }

        return <BorderedSpan>{child}</BorderedSpan>;
      })}
    </StyledSpan>
  );
};

Metadata.propTypes = {
  children: node,
};

Metadata.defaultProps = {
  children: null,
};

export default withEpisodeContext(Metadata);
