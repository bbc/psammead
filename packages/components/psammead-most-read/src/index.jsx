import React from 'react';
import { bool, node, number, oneOf, shape, string } from 'prop-types';
// import styled, { css } from 'styled-components';
import Grid from '@bbc/psammead-grid';

const MostRead = ({ dir, item, script, service }) => (
  <Grid
    columns={{
      group0: 6,
      group1: 6,
      group2: 6,
      group3: 6,
      group4: 8,
      group5: 8,
    }}
  >
    <Grid
      item
      columns={{
        group0: 1,
        group1: 1,
        group2: 1,
        group3: 1,
        group4: 1,
        group5: 1,
      }}
    >
      <p>No. 1</p>
    </Grid>
    <Grid
      item
      columns={{
        group0: 5,
        group1: 5,
        group2: 5,
        group3: 5,
        group4: 7,
        group5: 7,
      }}
    >
      <p>
        Paragraph that describes No.1, Paragraph that describes No.1, Paragraph
        that describes No.1
      </p>
    </Grid>
  </Grid>
);

MostRead.propTypes = {
  item: shape(),
  dir: string,
  script: string,
  service: string,
};

MostRead.defaultProps = {
  script: '',
  dir: oneOf(['rtl', 'ltr']),
  item: '',
  service: '',
};

export default MostRead;
