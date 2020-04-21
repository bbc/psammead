import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic } from '@bbc/gel-foundations/scripts';
import { renderRadioSchedule } from './testHelpers/helper';

describe('RadioSchedule', () => {
  shouldMatchSnapshot(
    'should render ltr radio schedules correctly',
    renderRadioSchedule({}),
  );
  shouldMatchSnapshot(
    'should render rtl radio schedules correctly',
    renderRadioSchedule({
      service: 'arabic',
      script: arabic,
      dir: 'rtl',
      locale: 'ar',
      selectedService: 'arabic',
    }),
  );
});
