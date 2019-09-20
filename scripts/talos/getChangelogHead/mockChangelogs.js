export const EXISTING_CHANGELOG_CONTENT1 = `
# Mock Psammead Changelog

| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |
| 1.1.0 | [PR#1024](https://github.com/bbc/psammead/pull/2) mock changes 2 |
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes 1 |
`;

export const EXISTING_CHANGELOG_CONTENT2 = `
# Mock Psammead Changelog

  |    Version |   Description  |   
|---------|-------------|
| 1.1.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes 2 |
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes 1 |
`;

export const EXPECTED_CHANGELOG_HEAD1 = `| Version | Description |
|---------|-------------|
| 1.3.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 4 |
| 1.2.0 | [PR#1025](https://github.com/bbc/psammead/pull/3) mock changes 3 |`;

export const EXPECTED_CHANGELOG_HEAD2 = `  |    Version |   Description  |   
|---------|-------------|
| 1.1.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes 2 |`;
