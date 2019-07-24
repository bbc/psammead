import * as numerals from '.';

describe('Numerals', () => {});

const numeralSystems = Object.keys(numerals);

numeralSystems.forEach(numeralSystem => {
  it(`should return ${numeralSystem} numerals`, () => {
    expect(numerals[numeralSystem]).toMatchSnapshot();
  });
});
