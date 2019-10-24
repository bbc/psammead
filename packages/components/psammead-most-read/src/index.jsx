import React from 'react';
import { bool, node, number, oneOf, shape, string } from 'prop-types';
import styled, { css } from 'styled-components';
import Grid from '@bbc/psammead-grid';

const MostRead = ({ dir, item, script, service }) => (
  <Grid
    columns={{
      group0: 8,
      group1: 8,
      group2: 8,
      group3: 8,
      group4: 8,
      group5: 8,
    }}
  >
    <Grid
      item
      columns={{
        group0: 6,
        group1: 6,
        group2: 6,
        group3: 6,
        group4: 6,
        group5: 6,
      }}
    >
      <p>Item 1 - Paragraph that spans 6 out of 8 columns through group4</p>
    </Grid>
    <Grid
      item
      columns={{
        group0: 6,
        group1: 6,
        group2: 6,
        group3: 6,
        group4: 6,
        group5: 6,
      }}
    >
      <p>Item 1 - Paragraph that spans 6 out of 8 columns through group4</p>
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
