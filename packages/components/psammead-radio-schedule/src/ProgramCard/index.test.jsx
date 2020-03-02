import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { renderProgramCard, sentenceCase } from '../testHelpers/helper';

const uniqueStates = ['live', 'onDemand', 'next'];

describe('ProgramCard', () => {
  uniqueStates.forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state, stateLabel: sentenceCase(state) }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: uniqueStates[1],
      stateLabel: 'مباشر',
      duration: 'PT30M',
      durationLabel: 'المدة الزمنية',
      service: 'arabic',
    }),
  );

  shouldMatchSnapshot(
    `should render correctly without summary`,
    renderProgramCard({
      state: uniqueStates[0],
      stateLabel: 'Live',
      displaySummary: false,
    }),
  );
});
