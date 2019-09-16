const readFileSync = require('../../utilities/readFileSync');
const getChangelogHead = require('./index');
const {
  EXISTING_CHANGELOG_CONTENT1,
  EXISTING_CHANGELOG_CONTENT2,
  EXPECTED_CHANGELOG_HEAD1,
  EXPECTED_CHANGELOG_HEAD2,
} = require('./mockChangelogs');

jest.mock('../../utilities/readFileSync');
jest.mock('../../utilities/getPackagePath', () => jest.fn());
jest.mock('path', () => ({ join: jest.fn() }));

describe('getChangelogHead', () => {
  it('should return head of content 1', () => {
    jest.clearAllMocks();
    readFileSync.mockImplementation(() => EXISTING_CHANGELOG_CONTENT1);
    const output = getChangelogHead('psammead-caption  ^1.1.0  →  ^1.2.0');
    expect(output).toEqual(EXPECTED_CHANGELOG_HEAD1);
  });

  it('should return head of content 2', () => {
    jest.clearAllMocks();
    readFileSync.mockImplementation(() => EXISTING_CHANGELOG_CONTENT2);

    expect(getChangelogHead('psammead-brand  ^1.0.0  →  ^1.1.0')).toEqual(
      EXPECTED_CHANGELOG_HEAD2,
    );
  });
});
