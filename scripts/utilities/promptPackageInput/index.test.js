const { prompt } = require('enquirer');
const promptPackageInput = require('.');

jest.mock('enquirer', () => ({
  prompt: jest.fn(),
}));

describe('getPackages', () => {
  promptPackageInput();
  const [[{ message, type }]] = prompt.mock.calls;

  it('should call prompt api with the correct message', () => {
    expect(message).toEqual('Please enter a comma separated list of packages');
  });

  it('should request the "list" prompt type', () => {
    expect(type).toEqual('list');
  });
});
