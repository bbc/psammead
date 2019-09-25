import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import UsefulLinks from './index';

storiesOf('Components|UsefulLinks', module)
  .add(
    'one link',
    () => <UsefulLinks usefulItems={['Labaran BBC Hausa a text']} />,
    {
      notes,
    },
  )
  .add(
    'multiple links',
    () => (
      <UsefulLinks
        usefulItems={[
          'Mitocinmu da sauko da sautin labarai',
          'Labaran BBC Hausa a text',
          'Abokan huldar BBC Hausa',
        ]}
      />
    ),
    {
      notes,
    },
  );
