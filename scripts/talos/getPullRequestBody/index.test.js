const getPullRequestBody = require('./index');
const getChangelogHead = require('../getChangelogHead');

const bumpedPackagesObj = {
  '@bbc/foobar': ['package1  ^1.3  →  ^1.4'],
  '@bbc/barfoo': ['package1  ^1.3  →  ^1.4', 'package2  ^1.1  →  ^1.3'],
};

const changelogHead1 = `| Version | Description |
|---------|-------------|
| 1.4.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |`;

const changelogHead2 = `| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |`;

const expected = `👋 The following packages have been updated:

@bbc/foobar

<details>
<summary>Details</summary>
package1  ^1.3  →  ^1.4

${changelogHead1}
</details>


@bbc/barfoo

<details>
<summary>Details</summary>
package1  ^1.3  →  ^1.4

${changelogHead1}
</details>

<details>
<summary>Details</summary>
package2  ^1.1  →  ^1.3

${changelogHead2}
</details>

`;

jest.mock('../getChangelogHead');

describe('getPullRequestBody', () => {
  it('should collated body', async () => {
    getChangelogHead.mockImplementation(publishedPackage =>
      publishedPackage === 'package1  ^1.3  →  ^1.4'
        ? changelogHead1
        : changelogHead2,
    );
    const body = getPullRequestBody(bumpedPackagesObj);
    expect(body).toEqual(expected);
  });
});
