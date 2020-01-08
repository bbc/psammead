import React from 'react';
import { shape, string, oneOf, arrayOf, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import MostReadList, { MostReadItemWrapper } from './list';
import MostReadTitle from './title';
import MostReadRank from './rank';
import { MostReadLink } from './item';

const MostRead = ({ items, script, service, header, dir }) => (
  <>
    <MostReadTitle
      dir={dir}
      script={script}
      service={service}
      header={header}
    />

    <MostReadList numberOfItems={items.length} dir={dir}>
      {items.map((item, i) => (
        <MostReadItemWrapper dir={dir} key={item.id}>
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
          />
        </MostReadItemWrapper>
      ))}
    </MostReadList>
  </>
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
};

MostRead.defaultProps = {
  dir: 'ltr',
};

export {
  MostReadList,
  MostReadLink,
  MostReadItemWrapper,
  MostReadRank,
  MostReadTitle,
  MostRead,
};
