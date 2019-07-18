export const EXISTING_CHANGELOG_CONTENT1 = `
# Mock Psammead Changelog

| Version | Description |
|---------|-------------|
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;

export const EXISTING_CHANGELOG_CONTENT2 = `
# Mock Psammead Changelog

  |    Version |   Description  |   
|---------|-------------|
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;

export const EXPECTED_NEW_CHANGELOG_CONTENT1 = `
# Mock Psammead Changelog

| Version | Description |
|---------|-------------|
| 1.0.1 | [PR#10](https://github.com/bbc/psammead/pull/10) mock changes |
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;

export const EXPECTED_NEW_CHANGELOG_CONTENT2 = `
# Mock Psammead Changelog

  |    Version |   Description  |   
|---------|-------------|
| 1.0.1 | [PR#10](https://github.com/bbc/psammead/pull/10) mock changes |
| 1.0.0 | [PR#1023](https://github.com/bbc/psammead/pull/1) mock changes |
`;
