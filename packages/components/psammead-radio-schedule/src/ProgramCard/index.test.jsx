import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import {
  renderProgramCard,
  sentenceCase,
  stateTypes,
} from '../testHelpers/helper';

describe('ProgramCard', () => {
  stateTypes.forEach(state => {
    shouldMatchSnapshot(
      `should render correctly for ${state}`,
      renderProgramCard({ state, stateLabel: sentenceCase(state) }),
    );
  });

  shouldMatchSnapshot(
    `should render correctly in RTL`,
    renderProgramCard({
      state: stateTypes[0],
      stateLabel: 'مباشر',
      duration: 'PT30M',
      durationLabel: 'المدة الزمنية',
      service: 'arabic',
    }),
  );
});
