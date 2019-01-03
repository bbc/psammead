# Contributing

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code. Contribution can include adding documentation, requesting clarification, making typo corrections and much more.

Psammead has a "Definition of Done" which applies to changes proposed to its main branch, `latest`. When you make a pull request, please check that your contribution matches this.

## Definition of Done

**Component Structure**

As discussed in the [README](https://github.com/BBC-News/psammead/blob/latest/README.md), Psammead is a library of shared components following the [container / components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Whether you are creating a component from scratch, or preparing to move an existing React component to Psammead, make sure that your component is presentational and reusable. The component should accept props if needed and implement minimal logic. A presentational component shouldn’t handle either fetching or mutation of data.

A component should have this file structure:

```
├── README.md
├── CHANGELOG.md
├── package.json
├── package-lock.json
├── src
│   ├── __snapshots__
│   │   └── index.test.jsx.snap
│   ├── index.jsx
│   ├── index.stories.jsx
│   └── index.test.jsx
```

The `src/` folder is necessary for separation of concerns, as a `dist/` folder containing the transpiled version of the component is generated at publish time. The `dist/` folder will contain the transpiled version of any `.jsx` files in the `src/` folder (saved as ES5 `.js`), with the exception of `*.stories.jsx` and `*.test.jsx` files.

NB: the `__snapshots__` directory is optional.

**package.json**

The `package.json` is namespaced with `@bbc/psammead-*` e.g. `@bbc/psammead-headings`.

Include the following authorship and repository information in your package. Replace the team name and email address if appropriate.

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

Also make sure you define the entry-point to the transpiled version of your component:

```
  "main": "dist/index.js",
```

For example, if your component's main entry-point is `src/foo.jsx`, you should point `"main"` to `"dist/foo.js"`.

**Tests**

- When you run `npm test` all unit tests should pass and there should be 100% test coverage of the component.
- No JS or CSS lint errors should be present.
- Your component should be fully accessibility-tested. There's a [test guide for testers](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-testers) and a [checklist for developers](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-developers) as well as guides for [designers](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-designers), [business analysts](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-business-analysts), [product owners](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-product-owners) and [project managers](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-project-managers).


***Creating custom tests***
By default, Psammead's `npm run test` runs unit tests through Jest. However, so long as adequate test coverage exists, it's not mandatory to test a component with Jest.

Custom tests must adhere to the following conventions: 

* The component's test script must be named `test`. This ensures the test script will be run by Psammead's root level `npm test` command. 
* The component's testing framework and/or assertion libraries must be installed as devDependencies in the component's `package.json`.
* Test files cannot be prefixed with ".test", as Psammead's Jest configuration looks for files ending in `.test.jsx` and `.test.js`. 

For a sample usage of custom Mocha/Chai tests with Psammead, please refer to [#247](https://github.com/BBC-News/psammead/pull/247).

**Accessibility Swarms**

When you add a component to this repository, you should carry out an Accessibility Swarm, ideally including team members from multiple disciplines and using [the Assistive Technology we support](./README.md#assistive-technology-support).

For changes to an existing component, a shorter swarm with fewer people should be conducted.

[Here are detailed steps on how to run accessibility swarms.](https://bbc-news.github.io/accessibility-news-and-you/accessibility-swarms)

As a result of the swarm, you may find some issues with your implementation. These should be documented and where relevant, [GitHub Issues](https://github.com/BBC-News/psammead/issues/new?template=bug_report.md) should be raised.

**CHANGELOG**

The changelog should follow the following convention:

```
# PackageName Changelog

| Version | Description |
|---------|-------------|
| 0.1.0 | [PR#49](https://github.com/BBC-News/psammead/pull/49) Initial creation of package |
```

**README**

The `README.md` should cover the following territory:

```
## Description
(high-level summary that will be accessible to product/UX/Test, plus link to Storybook, explain the different cases)
## When to use this component
(including where it is currently used)
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

### After merge

After merging a pull request into `latest`, please follow these steps to ensure that the changes are published to npm and to the Psammead Storybook https://bbc-news.github.io/psammead.

- Publish Packages  
  To make your changes available on the npm registry please publish any package changes. The instructions to do this can be found in the the [repository README](https://github.com/BBC-News/psammead#rocket-publishing-packages)
- Publish Storybook  
  When changes are made to a component its important to ensure the changes are visible on the hosted storybook. To do this please follow the instructions on the [repository README](https://github.com/BBC-News/psammead#deploying-storybook)
