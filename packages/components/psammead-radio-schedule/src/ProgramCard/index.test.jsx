import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { renderProgramCard, uniqueStates } from '../testHelpers/helper';

describe('ProgramCard', () => {
  uniqueStates.forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state, nextLabel: 'NEXT', liveLabel: 'LIVE' }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: uniqueStates[1],
      duration: 'PT30M',
      durationLabel: 'المدة الزمنية',
      service: 'arabic',
    }),
  );

  shouldMatchSnapshot(
    `should render correctly without summary`,
    renderProgramCard({
      state: uniqueStates[0],
      displaySummary: false,
    }),
  );
});
