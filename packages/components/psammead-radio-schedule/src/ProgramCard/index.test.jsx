import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { programStates } from './index';
import { renderProgramCard } from '../testHelpers/helper';

const stateTypes = Object.keys(programStates);

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
      service: 'arabic',
    }),
  );
});
