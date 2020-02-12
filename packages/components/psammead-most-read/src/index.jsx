import React from 'react';
import styled from 'styled-components';
import { shape, string, oneOf, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import SectionLabel from '@bbc/psammead-section-label';
import MostReadList from './List/index';
import MostReadRank from './Rank/index';
import { MostReadLink, MostReadItemWrapper } from './Item/index';

const StyledSection = styled.section.attrs(props => ({
  role: 'region',
  'aria-labelledby': props.labelId,
}))``;

const MostReadSection = ({
  labelId,
  script,
  dir,
  service,
  header,
  children,
  className,
}) => (
  <StyledSection labelId={labelId} className={className}>
    <SectionLabel
      script={script}
      dir={dir}
      labelId={labelId}
      service={service}
      bar={false}
    >
      {header}
    </SectionLabel>
    {children}
  </StyledSection>
);

MostReadSection.propTypes = {
  labelId: string,
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
  service: string.isRequired,
  header: string.isRequired,
  className: string,
};

MostReadSection.defaultProps = {
  labelId: 'Most-Read',
  dir: 'ltr',
  className: null,
};

export {
  MostReadList,
  MostReadLink,
  MostReadItemWrapper,
  MostReadRank,
  MostReadSection,
};
