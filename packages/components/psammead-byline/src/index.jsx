import React from 'react';
import { string, shape } from 'prop-types';
import styled, { css } from 'styled-components';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { C_STORM, C_RHINO } from '@bbc/psammead-styles/colours';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';

const AVATAR_DIAMETER = '4rem';

const Container = styled.div`
  align-items: center;
  display: flex;

  /* Support RTL */
  ${({ avatar }) =>
    avatar &&
    css`
      margin-right: -${GEL_SPACING};
      margin-left: -${GEL_SPACING};
    `}
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: ${AVATAR_DIAMETER};
  margin-right: ${GEL_SPACING};
  margin-left: ${GEL_SPACING};
  width: ${AVATAR_DIAMETER};
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER}
`;

const Name = styled.span`
  color: ${C_STORM};
  margin-bottom: ${({ avatar }) => avatar && GEL_SPACING_HLF};
`;
const Title = styled.span`
  color: ${C_RHINO};
`;

const Byline = ({ service, name, title, avatar }) => (
  <Container avatar={avatar}>
    {avatar && <Avatar src={avatar.src} alt={avatar.alt} />}
    <Person service={service}>
      <Name avatar={avatar}>{name}</Name>
      <Title>{title}</Title>
    </Person>
  </Container>
);

Byline.defaultProps = {
  avatar: null,
};

Byline.propTypes = {
  service: string.isRequired,
  avatar: shape({
    src: string.isRequired,
    alt: string,
  }),
  name: string.isRequired,
  title: string.isRequired,
};

export default Byline;
