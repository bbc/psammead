import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

const AVATAR_DIAMETER = '64px';

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: ${AVATAR_DIAMETER};
  margin-right: ${GEL_SPACING_DBL};
  width: ${AVATAR_DIAMETER};
`;

const Identification = styled.div`
  display: flex;
  flex-direction: column;
  ${({ service }) => getSansRegular(service)}
`;

const Byline = ({ service, name, title, avatar }) => (
  <Container>
    {avatar && <Avatar src={avatar.src} alt={avatar.alt} />}
    <Identification service={service}>
      <span>{name}</span>
      <span>{title}</span>
    </Identification>
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
