import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { renderProgramCard } from '../testHelpers/helper';

const stateTypes = ['live', 'next', 'onDemand'];

describe('ProgramCard', () => {
  stateTypes.forEach(type => {
    shouldMatchSnapshot(
      `should render correctly for ${type}`,
      renderProgramCard({ state: { type, translation: type } }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: { type: stateTypes[0], translation: 'مباشر' },
      duration: { durationValue: '30:00', durationText: 'المدة الزمنية' },
      service: 'arabic',
    }),
  );
});
