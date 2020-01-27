import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { renderProgramCard } from '../testHelpers/helper';

const stateTypes = ['live', 'next', 'onDemand'];

describe('ProgramCard', () => {
  stateTypes.forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state, stateLabel: state }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: stateTypes[0],
      stateLabel: 'مباشر',
      duration: '30:00',
      durationLabel: 'المدة الزمنية',
      service: 'arabic',
    }),
  );
});
