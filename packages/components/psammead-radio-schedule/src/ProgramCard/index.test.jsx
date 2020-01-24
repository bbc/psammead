import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { renderProgramCard } from '../testHelpers/helper';

const stateTypes = ['live', 'next', 'onDemand'];

describe('ProgramCard', () => {
  stateTypes.forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state, localisedState: state }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: stateTypes[0],
      localisedState: 'مباشر',
      duration: '30:00',
      localisedDuration: 'المدة الزمنية',
      service: 'arabic',
    }),
  );
});
