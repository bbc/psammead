const { writeFile } = require('fs');
const writeChangelog = require('./writeChangelog');

jest.mock('fs', () => ({
  writeFile: jest.fn(),
}));

const getNewChangelogContent = require('./getNewChangelogContent');
const getChangelogCommitMessage = require('./getChangelogCommitMessage');

const EXISTING_CHANGELOG_CONTENT = `
# Mock Psammead Changelog

| Version | Description |
|---------|-------------|
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;

describe('getNewChangelogContent', () => {
  it('should return the changelog content', () => {
    const actual = getNewChangelogContent(
      '1.0.1',
      'https://github.com/bbc/psammead/pull/10',
      'mock changes',
    )(EXISTING_CHANGELOG_CONTENT);
    const NEW_CHANGELOG_CONTENT = `
# Mock Psammead Changelog

| Version | Description |
|---------|-------------|
| 1.0.1 | [PR#10](https://github.com/bbc/psammead/pull/10) mock changes |
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;

    expect(actual).toEqual(NEW_CHANGELOG_CONTENT);
  });

  it('should return the changelog commit message for multiple packages', () => {
    const actual = getChangelogCommitMessage([
      'psammead-brand',
      'psammead-image',
    ]);

    expect(actual).toEqual(`Update changelogs

Updates changelogs for psammead-brand, psammead-image`);
  });

  it('should return the changelog commit message for one package', () => {
    const actual = getChangelogCommitMessage(['psammead-image']);

    expect(actual).toEqual('Update changelog for psammead-image');
  });

  it('should call writeFile with correct file path and content', async () => {
    writeChangelog('/psammead/packages/components/psammead-brand')(
      'mock content',
    );
    const [[filePath, content]] = writeFile.mock.calls;

    expect(filePath).toEqual('/psammead/packages/components/psammead-brand');
    expect(content).toEqual('mock content');
  });
});
