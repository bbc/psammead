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

    const [
      ,
      namePrompt,
      descriptionPrompt,
      authorNamePrompt,
      authorEmailPrompt
    ] =  questions;

    expect(namePrompt.validate()).toBe(packageNameWarning);
    expect(namePrompt.validate('9999'.toString())).toBe(packageNameWarning);
    expect(namePrompt.validate('???&&')).toBe(packageNameWarning);
    expect(namePrompt.validate('foo bar')).toBe(packageNameWarning);
    expect(namePrompt.validate('psammead-foobar')).toBe(existingWarning);
    expect(descriptionPrompt.validate()).toBe(descriptionWarning);
    expect(authorNamePrompt.validate()).toBe(authorWarning);
    expect(authorEmailPrompt.validate('foobar@foobar')).toBe(emailWarning);
    expect(authorEmailPrompt.validate('@.')).toBe(emailWarning);
  });

  it('should pass the validation checks', () => {
    const [
      ,
      namePrompt,
      descriptionPrompt,
      authorNamePrompt,
      authorEmailPrompt
    ] =  questions;

    expect(namePrompt.validate('new-package')).toBe(true);
    expect(descriptionPrompt.validate('a lovely description')).toBe(true);
    expect(authorNamePrompt.validate('Test User')).toBe(true);
    expect(authorEmailPrompt.validate('testUser@bbc.co.uk')).toBe(true);
  });
});
