import questions from './index';

describe('question functions', () => {
  it('package name validation works', () => {
    expect(questions[0].validate()).toBe(
      'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.',
    );
    expect(questions[0].validate('9999'.toString())).toBe(
      'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.',
    );
    // expect(questions[0].validate('psammead-styles')).toBe(
    //   'Sorry! That package name is taken! Please pick another.',
    // );
    expect(questions[0].validate('???&&')).toBe(
      'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.',
    );
  });
  it('does not accept an empty description', () => {
    expect(questions[1].validate('')).toBe(
      'Please enter a valid module description',
    );
  });
  it('accepts a valid description', () => {
    expect(questions[1].validate('a lovely description')).toBe(true);
  });
  it('rejects a short author name', () => {
    expect(questions[2].validate('pi')).toBe('Please enter a valid name');
  });
  it('accepts a valid author name', () => {
    expect(questions[2].validate('Test User')).toBe(true);
  });
  it('rejects invalid email', () => {
    expect(questions[3].validate('@@@@')).toBe(
      'Please enter a valid email address',
    );
    expect(questions[3].validate('hello')).toBe(
      'Please enter a valid email address',
    );
  });
});
