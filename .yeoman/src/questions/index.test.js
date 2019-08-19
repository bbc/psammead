const questions = require('./index');
const getExistingPackages = require('../get-existing/index.js');

const componentDir = [
  'foobar.js',
  'README.md',
  'psammead-foobar',
  'psammead-foobar',
];

jest.mock('../get-existing/index.js', () => jest.fn());
getExistingPackages.mockImplementation(() => {
  return componentDir;
});

describe('Questions', () => {
  it('should return validatation warnings', () => {
    const packageNameWarning =
      'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.';

    const existingWarning =
      'Sorry! That package name is taken! Please pick another.';

    const emailWarning = 'Please enter a valid email address';

    const authorWarning = 'Please enter a valid name';

    const descriptionWarning = 'Please enter a valid module description';

    expect(questions[0].validate()).toBe(packageNameWarning);
    expect(questions[0].validate('9999'.toString())).toBe(packageNameWarning);
    expect(questions[0].validate('???&&')).toBe(packageNameWarning);
    expect(questions[0].validate('foo bar')).toBe(packageNameWarning);
    expect(questions[0].validate('psammead-foobar')).toBe(existingWarning);
    expect(questions[1].validate()).toBe(descriptionWarning);
    expect(questions[2].validate()).toBe(authorWarning);
    expect(questions[3].validate('foobar@foobar')).toBe(emailWarning);
    expect(questions[3].validate('@.')).toBe(emailWarning);
  });

  it('should pass the validation checks', () => {
    expect(questions[0].validate('new-package')).toBe(true);
    expect(questions[1].validate('a lovely description')).toBe(true);
    expect(questions[2].validate('Test User')).toBe(true);
    expect(questions[3].validate('testUser@bbc.co.uk')).toBe(true);
  });
});
