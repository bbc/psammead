const readFile = require('../../utilities/readFile');
const getChangelogHead = require('./index');
const {
  EXISTING_CHANGELOG_CONTENT1,
  EXISTING_CHANGELOG_CONTENT2,
  EXPECTED_CHANGELOG_HEAD1,
  EXPECTED_CHANGELOG_HEAD2,
} = require('./mockChangelogs');

jest.mock('../../utilities/readFile');

describe('getChangelogHead', () => {
  it('should return head of content 1', () => {
    jest.clearAllMocks();
    readFile.mockImplementation(() => EXISTING_CHANGELOG_CONTENT1);
    const output = getChangelogHead('psammead-caption  ^1.1.0  →  ^1.2.0');
    expect(output).toEqual(EXPECTED_CHANGELOG_HEAD1);
  });

  it('should return head of content 2', () => {
    jest.clearAllMocks();
    readFile.mockImplementation(() => EXISTING_CHANGELOG_CONTENT2);

    expect(getChangelogHead('psammead-brand  ^1.0.0  →  ^1.1.0')).toEqual(
      EXPECTED_CHANGELOG_HEAD2,
    );
  });
});
