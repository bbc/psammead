import React, { Fragment } from 'react';
import styled from 'styled-components';
import { node, string, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_METAL, C_LUNAR } from '@bbc/psammead-styles/colours';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const StyledIndexAlsos = styled.div`
  position: relative;
  z-index: 2;
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
    visibility: hidden;
  }
`;

const StyledIndexAlso = styled.div`
  border-top: 1px solid ${C_LUNAR};
  padding: ${GEL_SPACING} 0;
`;

const StyledIndexAlsosUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const IndexAlsosMediaIndicator = styled.span`
  padding-right: ${GEL_SPACING};
`;

const RoleText = styled.span.attrs({
  role: 'text',
})``;

const IndexAlsosText = styled.span`
  display: inline;
  vertical-align: middle;
`;

const StyledIndexAlsosLink = styled.a`
  ${props => (props.script ? getBrevier(props.script) : '')};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:visited {
    color: ${C_METAL};
  }
`;

const IndexAlsosLink = ({
  children,
  script,
  service,
  url,
  mediaIndicator,
  mediaType,
}) => {
  return (
    <StyledIndexAlsosLink href={url} script={script} service={service}>
      {mediaIndicator ? (
        <Fragment>
          <IndexAlsosMediaIndicator>{mediaIndicator}</IndexAlsosMediaIndicator>
          <RoleText>
            <VisuallyHiddenText>{mediaType}, </VisuallyHiddenText>
            <IndexAlsosText>{children}</IndexAlsosText>
          </RoleText>
        </Fragment>
      ) : (
        <IndexAlsosText>{children}</IndexAlsosText>
      )}
    </StyledIndexAlsosLink>
  );
};

IndexAlsosLink.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  url: string.isRequired,
  mediaIndicator: node,
  mediaType: string.isRequired,
};

IndexAlsosLink.defaultProps = {
  mediaIndicator: null,
};

export const IndexAlsos = ({ children, offScreenText }) => (
  <StyledIndexAlsos>
    <VisuallyHiddenText as="h4">{offScreenText}</VisuallyHiddenText>
    {children}
  </StyledIndexAlsos>
);

IndexAlsos.propTypes = {
  children: node.isRequired,
  offScreenText: string,
};

IndexAlsos.defaultProps = {
  offScreenText: null,
};

export const IndexAlsosUl = ({ children }) => (
  <StyledIndexAlsosUl role="list">{children}</StyledIndexAlsosUl>
);

IndexAlsosUl.propTypes = {
  children: node.isRequired,
};

export const IndexAlsosLi = ({ ...props }) => (
  <StyledIndexAlso as="li" role="listitem">
    <IndexAlsosLink {...props} />
  </StyledIndexAlso>
);

export const IndexAlso = ({ ...props }) => (
  <StyledIndexAlso>
    <IndexAlsosLink {...props} />
  </StyledIndexAlso>
);
