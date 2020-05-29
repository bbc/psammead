import AmpImg from './index.amp';
import { stories } from './testHelpers/stories';
import ampDecorator from '../../../../.storybook/amp-decorator';

const additionalProps = {
  layout: 'responsive',
};

stories(
  AmpImg,
  'Components|Images/Image - AmpImg',
  true,
  additionalProps,
  ampDecorator,
);
