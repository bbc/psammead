import React, { Children } from 'react';
import styled from '@emotion/styled';
import { node } from 'prop-types';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_METAL, C_PEBBLE, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

import { withEpisodeContext } from './helpers';

const BorderedSpan = styled.span`
  padding-left: ${GEL_SPACING};
  margin-left: ${GEL_SPACING};
  border-left: 0.0625rem solid ${C_CLOUD_LIGHT};
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
        const isFirstChild = i === 0;

        if (isFirstChild) {
          return child;
        }

        // Using array index here because data is immutable per episode
        // eslint-disable-next-line react/no-array-index-key
        return <BorderedSpan key={i}>{child}</BorderedSpan>;
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
