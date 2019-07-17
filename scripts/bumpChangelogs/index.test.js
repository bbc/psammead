const { writeFile } = require('fs');
const writeChangelog = require('./writeChangelog');

const {
  EXISTING_CHANGELOG_CONTENT1,
  EXISTING_CHANGELOG_CONTENT2,
  EXPECTED_NEW_CHANGELOG_CONTENT1,
  EXPECTED_NEW_CHANGELOG_CONTENT2,
} = require('./mockChangelogs');

jest.mock('fs', () => ({
  writeFile: jest.fn(),
}));

const getNewChangelogContent = require('./getNewChangelogContent');
const getChangelogCommitMessage = require('./getChangelogCommitMessage');

describe('bumpChangelogs', () => {
  it('should return the new changelog content', () => {
    const newChangelog1 = getNewChangelogContent(
      '1.0.1',
      'https://github.com/bbc/psammead/pull/10',
      'mock changes',
    )(EXISTING_CHANGELOG_CONTENT1);

    const newChangelog2 = getNewChangelogContent(
      '1.0.1',
      'https://github.com/bbc/psammead/pull/10',
      'mock changes',
    )(EXISTING_CHANGELOG_CONTENT2);

    expect(newChangelog1).toEqual(EXPECTED_NEW_CHANGELOG_CONTENT1);
    expect(newChangelog2).toEqual(EXPECTED_NEW_CHANGELOG_CONTENT2);
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
