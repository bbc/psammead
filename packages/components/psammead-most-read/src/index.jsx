import React from 'react';
import { oneOf, shape, string, arrayOf } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import MostReadList from './List';
import MostReadTitle from './Title';
import { itemPropTypes } from './testHelpers/itemsHelper';

const MostRead = ({ script, service, header, items, dir }) => (
  <>
    <MostReadTitle
      dir={dir}
      script={script}
      service={service}
      header={header}
    />
    <MostReadList dir={dir} items={items} service={service} script={script} />
  </>
);

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

export default MostRead;
