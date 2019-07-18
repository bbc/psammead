const { prompt } = require('enquirer');
const promptStageAndCommit = require('.');

jest.mock('enquirer', () => ({
  prompt: jest.fn(),
}));

const args = [
  ['psammead-brand', 'psammead-image'],
  [
    '/psammead/packages/components/psammead-brand',
    '/psammead/packages/components/psammead-image',
  ],
];

beforeEach(() => {
  prompt.mockResolvedValue({ shouldCommitChanges: true });
});

describe('promptStageAndCommit', () => {
  it('should call prompt api with the correct message', async () => {
    await promptStageAndCommit(args);

    const [[{ message }]] = prompt.mock.calls;
    expect(message).toEqual('Do you want to commit the changes?');
  });

  it('should request the "toggle" prompt type', async () => {
    await promptStageAndCommit(args);

    const [[{ type }]] = prompt.mock.calls;
    expect(type).toEqual('toggle');
  });

  it('should display the correct enabled/disabled text', async () => {
    await promptStageAndCommit(args);

    const [[{ enabled, disabled }]] = prompt.mock.calls;

    expect(enabled).toEqual('Yes');
    expect(disabled).toEqual('No');
  });

  it('should return the passed in packages names', async () => {
    const { packageNames } = await promptStageAndCommit(args);

    expect(packageNames).toEqual(['psammead-brand', 'psammead-image']);
  });

  it('should return the passed in package paths', async () => {
    const { paths } = await promptStageAndCommit(args);

    expect(paths).toEqual([
      '/psammead/packages/components/psammead-brand',
      '/psammead/packages/components/psammead-image',
    ]);
  });

  it('should promise reject on an error', async () => {
    prompt.mockRejectedValue(new Error('error'));

    await expect(promptStageAndCommit(args)).rejects.toThrow();
  });
});
