import AmpImg from './index.amp';
import stories from './testHelpers/stories';
import { ampStylesScripts } from '../../../../.storybook/config';

const additionalProps = {
  layout: 'responsive',
};

stories(ampStylesScripts, AmpImg, 'Image - AmpImg', true, additionalProps);
