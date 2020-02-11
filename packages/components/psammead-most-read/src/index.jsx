import React from 'react';
import styled from 'styled-components';
import { shape, string, oneOf, arrayOf, node } from 'prop-types';
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

const MostRead = ({
  items,
  script,
  service,
  header,
  dir,
  labelId,
  className,
}) => (
  <MostReadSection
    labelId={labelId}
    script={script}
    service={service}
    header={header}
    dir={dir}
    className={className}
  >
    <MostReadList numberOfItems={items.length} dir={dir}>
      {items.map((item, i) => (
        <MostReadItemWrapper dir={dir} key={item.id} maxTwoColumns={true}>
          <MostReadRank
            service={service}
            script={script}
            listIndex={i + 1}
            numberOfItems={items.length}
            dir={dir}
          />
          <MostReadLink
            dir={dir}
            service={service}
            script={script}
            title={item.title}
            href={item.href}
          >
            {item.timestamp}
          </MostReadLink>
        </MostReadItemWrapper>
      ))}
    </MostReadList>
  </MostReadSection>
);

const itemPropTypes = shape({
  id: string.isRequired,
  title: string.isRequired,
  href: string.isRequired,
  timestamp: node,
});

MostRead.propTypes = {
  items: arrayOf(itemPropTypes).isRequired,
  header: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
  labelId: string,
  className: string,
};

MostRead.defaultProps = {
  dir: 'ltr',
  labelId: 'Most-Read',
  className: null,
};

export {
  MostReadList,
  MostReadLink,
  MostReadItemWrapper,
  MostReadRank,
  MostReadSection,
  MostRead,
};
