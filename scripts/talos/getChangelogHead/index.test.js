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
    const output = getChangelogHead('psammead-caption');
    console.log(output);
    expect(output).toEqual(EXPECTED_CHANGELOG_HEAD1);
  });

  it('should return head of content 2', () => {
    jest.clearAllMocks();
    readFile.mockImplementation(() => EXISTING_CHANGELOG_CONTENT2);

    expect(getChangelogHead('psammead-brand')).toEqual(
      EXPECTED_CHANGELOG_HEAD2,
    );
  });
});
