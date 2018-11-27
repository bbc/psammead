# Contributing 

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code - that can include documentation, clarifications, typo corrections and much more.

Psammead has a "Definition of Done" that applies to changes proposed to out main branch, `latest`. When you make a pull request, please check that your contribution matches this.

## Definition of Done

**Component Structure**

A component should have this file structure:

```
├── README.md
├── __snapshots__
│   └── index.test.jsx.snap
├── eslintrc.js
├── index.jsx
├── index.stories.jsx
├── index.test.jsx
└── package.json
```

The `__snapshots__` directory is optional.

**package.json**

The `package.json` is namespaced with `@bbc/psammead-*` e.g. `@bbc/psammead-headings`.

The author of the package

```
  "author": {
    "name": "BBC Psammead Maintainers",
    "email": "PsammeadMaintainers@bbc.co.uk"
  },
```

Repository info

```
  "repository": {
    "type": "git",
    "url": "https://github.com/BBC-News/psammead/tree/latest/packages/Headings"
  },
```

**Tests**
When you run `npm run test` all unit tests should pass and there should be 100% test coverage of the component. No JS or CSS lint errors should be present.

**README**
Your component should include documentation in a `README.md`. This file should also point to the main Psammead [CODE_OF_CONDUCT]([Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)) and [CONTRIBUTING]([Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)) files.
