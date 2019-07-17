const { prompt } = require('enquirer');
const promptPackageMultiSelect = require('.');

jest.mock('enquirer', () => ({
  prompt: jest.fn(),
}));

describe('getPackages', () => {
  promptPackageMultiSelect();
  const [[{ message, type }]] = prompt.mock.calls;

  it('should call prompt api with the correct message', () => {
    expect(message).toEqual(
      'Which package(s) changelog would you like to bump?',
    );
  });

  it('should request the "multiselect" prompt type', () => {
    expect(type).toEqual('multiselect');
  });
});
