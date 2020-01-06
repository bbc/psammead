import React from 'react';
import { oneOf, shape, string, number, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import MostReadList from './List';
import MostReadTitle from './Title';

const MostRead = ({
  script,
  service,
  header,
  dir,
  children,
  numberOfItems,
}) => (
  <>
    <MostReadTitle
      dir={dir}
      script={script}
      service={service}
      header={header}
    />

    <MostReadList numberOfItems={numberOfItems} dir={dir}>
      {children}
    </MostReadList>
  </>
);

MostRead.propTypes = {
  numberOfItems: number,
  header: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
  children: node.isRequired,
};

MostRead.defaultProps = {
  dir: 'ltr',
  numberOfItems: 10,
};

export default MostRead;
