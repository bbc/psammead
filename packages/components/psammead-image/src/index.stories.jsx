import { withKnobs } from '@storybook/addon-knobs';
import { Img } from '.';
import { stories } from './testHelpers/stories';

const type = 'Img';

stories(Img, 'Components/Images/Image - Img', false, {}, withKnobs, type);
