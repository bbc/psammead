# Contributing 

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code. Contribution can include adding documentation, requesting clarification, making typo corrections and much more.

Psammead has a "Definition of Done" which applies to changes proposed to its main branch, `latest`. When you make a pull request, please check that your contribution matches this.

## Definition of Done

**Component Structure**

A component should have this file structure:

```
├── README.md
├── CHANGELOG.md
├── __snapshots__
│   └── index.test.jsx.snap
├── index.jsx
├── index.stories.jsx
├── index.test.jsx
├── package.json
└── package-lock.json
```

The `__snapshots__` directory is optional.


**package.json**

The `package.json` is namespaced with `@bbc/psammead-*` e.g. `@bbc/psammead-headings`.

Include the following authorship and repository information in your package:

```
  "author": {
    "name": "BBC Psammead Maintainers",
    "email": "PsammeadMaintainers@bbc.co.uk"
  },
```

```
  "repository": {
    "type": "git",
    "url": "https://github.com/BBC-News/psammead/tree/latest/packages/psammead-headings"
  },
```


**Tests**

When you run `npm run test` all unit tests should pass and there should be 100% test coverage of the component. No JS or CSS lint errors should be present.


**CHANGELOG**

The changelog should follow the following convention: 
```
<h1 align="center">PackageName Changelog</h1>

| Version | Description |
|---------|-------------|
| 0.1.0 | [PR#49](https://github.com/BBC-News/psammead/pull/49) Initial creation of package |
```


**README**

The `README.md` should cover the following territory: 

```
- ## Description (high-level summary that will be accessible to product/UX/Test, plus link to Storybook, explain the different cases)
- ## When to use this component (including where it is currently used)
## When to not use this component
(if this is not known, can leave the section empty)
## Accessibility notes
(ensuring they make sense to non-technical audiences)
## Roadmap
(what we have planned for this component)
## Additional notes
(link to any relevant ADRs)
```

In addition, the `README.md` should also point to Psammead's [CODE_OF_CONDUCT](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md), [CONTRIBUTING](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md) guide, and [LICENSE](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
