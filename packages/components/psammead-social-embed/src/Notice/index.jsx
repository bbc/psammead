import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { C_EBON, C_PEBBLE } from '@bbc/psammead-styles/colours';
import { getSansRegular, getSansBold } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_DBL, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { GEL_BODY_COPY, GEL_MINION } from '@bbc/gel-foundations/typography';

import { detokenise, dictionaryFactory } from '../utilities';

const BORDER_WEIGHT = '0.0625rem';

const Wrapper = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_BODY_COPY}
  border: ${BORDER_WEIGHT} solid ${C_PEBBLE};
  border-radius: ${GEL_SPACING};
  color: ${C_EBON};
  padding: ${GEL_SPACING_DBL};

  p {
    margin-top: 0;
    margin-bottom: ${GEL_SPACING};
  }

  a,
  small {
    display: block;
  }

  a {
    ${({ service }) => getSansBold(service)}
    text-decoration: none;
  }

  small {
    margin-top: ${GEL_SPACING};
    ${GEL_MINION}
  }
`;

const Notice = ({
  provider,
  service,
  text,
  linkText,
  linkHref,
  warningText,
}) => {
  const dictionary = dictionaryFactory({ provider });
  return (
    <Wrapper service={service}>
      <p>{detokenise(text, dictionary)}</p>
      <a id="link" href={linkHref}>
        {detokenise(linkText, dictionary)}
      </a>
      <small aria-describedby="link">{warningText}</small>
    </Wrapper>
  );
};

Notice.defaultProps = {
  warningText: null,
};

Notice.propTypes = {
  provider: string.isRequired,
  service: string.isRequired,
  text: string.isRequired,
  linkText: string.isRequired,
  linkHref: string.isRequired,
  warningText: string,
};

export default Notice;
