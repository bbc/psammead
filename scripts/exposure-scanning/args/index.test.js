import parseArgs from '.';

describe('Parsing arguments', () => {
  it('should return an object containing the repo, flag, id and regex string', () => {
    expect(
      parseArgs(['node', 'scan.js', 'simorgh', '-pr', '1234', 'regex']),
    ).toEqual({
      repo: 'simorgh',
      flag: '-pr',
      id: '1234',
      regexString: 'regex',
    });
  });

  it('should throw an error without logging args if the number given is incorrect', () => {
    expect(() =>
      parseArgs(['node', 'scan.js', 'simorgh', '-pr', '1234', 're[g]ex', '-u']),
    ).toThrow(
      'Incorrect number of args.\nUsage: node scripts/exposure-scanning <repo> <-pr/-issue> <id> <regex>',
    );
  });

  it('should throw an error without logging args if an invalid id is given', () => {
    expect(() =>
      parseArgs([
        'node',
        'scan.js',
        'psammead',
        '-issue',
        'add-topic-tags',
        'regex',
      ]),
    ).toThrow('Invalid issue/pr id');
  });
});
