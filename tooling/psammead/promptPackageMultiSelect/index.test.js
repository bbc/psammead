const { prompt } = require('enquirer');
const promptPackageMultiSelect = require('.');

jest.mock('enquirer', () => ({
  prompt: jest.fn(),
}));

describe('getPackages', () => {
  promptPackageMultiSelect();
  const [[{ message, type }]] = prompt.mock.calls;

  it('should call prompt api with the correct message', () => {
    expect(message).toEqual('Select package(s) with space bar then hit enter');
  });

  it('should request the "multiselect" prompt type', () => {
    expect(type).toEqual('multiselect');
  });
});
