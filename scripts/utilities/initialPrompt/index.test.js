const { prompt } = require('enquirer');
const initialPrompt = require('.');

jest.mock('enquirer', () => ({
  prompt: jest.fn().mockReturnValue({ then: jest.fn() }),
}));

describe('getPackages', () => {
  initialPrompt('mock message');
  const [[{ message, type, choices }]] = prompt.mock.calls;

  it('should call prompt api with passed in message', () => {
    expect(message).toEqual('mock message');
  });

  it('should request the "select" prompt type', () => {
    expect(type).toEqual('select');
  });

  it('should specify the prompt choices', () => {
    const [choice1, choice2] = choices;

    expect(choice1).toEqual('Choose from a list of all packages');
    expect(choice2).toEqual('Enter a comma separated list of package names');
  });
});
