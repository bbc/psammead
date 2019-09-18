# Contributing

## Documentation index
Please familiarise yourself with our:
- [Code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)
- [Code Standards and Ways of Working](https://github.com/bbc/simorgh/blob/latest/Code-Standards-and-Ways-of-Workinnng.md)
- [Contributing guidelines](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md) (you are here)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [Primary README](https://github.com/bbc/psammead/blob/latest/README.md)
- [Talos (package bumping bot)](https://github.com/bbc/psammead/blob/latest/scripts/talos/README.md)

NB there is further documentation colocated with relevant packages and code. The above list is an index of the top-level documentation of our repo (and our sibling repo [Simorgh](https://github.com/bbc/simorgh)).

## Overview

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code. Contribution can include adding documentation, requesting clarification, making typo corrections and much more.

Psammead has a "Definition of Done" which applies to changes proposed to its main branch, `latest`. When you make a pull request, please check that your contribution matches this.


Fundamentally, Psammead components are intended to be:

Presentational
GEL-Compliant
Accessible


### What does that mean?

#### Presentational

When developing and using Psammead components, we try to maintain a very clear distinction between [presentational and container components, as they are described in this blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

In summary, Psammead components should be almost exclusively concerned with how the component appears, and should avoid fetching or mutating data. Instead, these data fetching and mutating operations are split out into "container" components that can be entirely separate, and which can provide any necessary data or behaviour to presentational components via props.

These principles help Psammead components to be reusable across fundamentally different projects and back-ends.

#### GEL-Compliant

GEL is the BBC's shared design language. All Psammead components should be built on the [GEL utility packages](../utilities/) defined in this repo, helping ensure they fit within GEL, and in turn provide a consistent user experience.

#### Accessible

Finally, Psammead components are built and tested against the [BBC News assistive technology guidelines](https://bbc.github.io/accessibility-news-and-you/). More information on building components to these guidelines can be found in the [project's contributing guide](../../CONTRIBUTING.md).

## Definition of Done
<!-- TODO: ADDTHIS -->


## Developing with Psammead

1. Find a Psammead component you wish you to use, in your project from the [directory of available packages](https://github.com/bbc/psammead/tree/latest/packages), or by running `npx lerna list` inside the repo.
2. To install the package in your local development, run:
   ```
   npm install @bbc/psammead-<component_name>
   ```
3. See the README for the respective the Psammead component, to see the required props, usage example and use-cases for it.

### Using multiple components locally

When making changes to a package locally if you want to pull those changes into another psammead package then the following command will create the required symlinks for you.

Run the following command to link all psammead packages up regardless of dependency version:

```
npm run install:packages --force-local
```








**Component Structure**

<!-- CHANGE THIS -->
As discussed in the [README](https://github.com/bbc/psammead/blob/latest/README.md), Psammead is a library of shared components following the [container / components pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). Whether you are creating a component from scratch, or preparing to move an existing React component to Psammead, make sure that your component is presentational and reusable. The component should accept props if needed and implement minimal logic. A presentational component shouldn’t handle either fetching or mutation of data.

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
    "url": "https://github.com/bbc/psammead/tree/latest/packages/psammead-headings"
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
- Your component should be fully accessibility-tested. There's a [test guide for testers](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-testers) and a [checklist for developers](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-developers) as well as guides for [designers](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-designers), [business analysts](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-business-analysts), [product owners](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-product-owners) and [project managers](https://bbc.github.io/accessibility-news-and-you/accessibility-news-and-project-managers).

**_Creating custom tests_**
By default, Psammead's `npm run test` runs unit tests through Jest. However, so long as adequate test coverage exists, it's not mandatory to test a component with Jest.

Custom tests must adhere to the following conventions:

- The component's test script must be named `test`. This ensures the test script will be run by Psammead's root level `npm test` command.
- The component's testing framework and/or assertion libraries must be installed as devDependencies in the component's `package.json`.
- Test files cannot be prefixed with ".test", as Psammead's Jest configuration looks for files ending in `.test.jsx` and `.test.js`.

For a sample usage of custom Mocha/Chai tests with Psammead, please refer to [#247](https://github.com/bbc/psammead/pull/247).

**Accessibility Swarms**
<!-- RELATE THIS TO DETAIL ON ACCESSIBBILITY IN THE REPO -->
When you add a component to this repository, you should carry out an Accessibility Swarm, ideally including team members from multiple disciplines and using [the Assistive Technology we support](./README.md#assistive-technology-support).

For changes to an existing component, a shorter swarm with fewer people should be conducted.

[Here are detailed steps on how to run accessibility swarms.](https://bbc.github.io/accessibility-news-and-you/accessibility-swarms)

As a result of the swarm, you may find some issues with your implementation. These should be documented and where relevant, [GitHub Issues](https://github.com/bbc/psammead/issues/new?template=bug_report.md) should be raised.

**CHANGELOG**

The changelog should follow the following convention:

```
# PackageName Changelog

| Version | Description |
|---------|-------------|
| 0.1.0 | [PR#49](https://github.com/bbc/psammead/pull/49) Initial creation of package |
```

**README**

The `README.md` should follow this template:

```
# (package name) &middot; (badges)

## Description
(high-level summary that will be accessible to product/UX/Test, plus link to Storybook, explain the different cases)

## When to use this component
(including where it is currently used)

## When not to use this component
(if this is not known, can leave the section empty)

## Installation
`npm install (package-name)`

## Props
(a table of all the component's props, following the template below)

| Argument  | Type                | Required | Default | Example         |
|-----------|---------------------|----------|---------|-----------------|
| prop-name | description of type | Yes/No   | `value` | `example input` |

## Usage
(A code block containing an example usage of the component, including importing)

## Accessibility notes
(ensuring they make sense to non-technical audiences)

## Roadmap
(what we have planned for this component)

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
```

When linking to other pages from a component's README, we advise you do so only by absolute URL, and avoid the use of relative paths. Component READMEs are displayed in a variety of places, including NPM and Storybook, and this helps ensure the intended meaning is preserved.

If you wish to exclude one or more sections of this template, we advise you do so by simply commenting out the heading, like so:

```
<!-- ## Roadmap -->
```

### After merge

After merging a pull request into `latest` the Jenkins pipeline publishes the new package versions to npm and the Psammead Storybook to github pages at https://bbc.github.io/psammead. Once the pipeline runs successfully:

- Confirm the version update with `npm show {pkg} version`.
- Confirm storybook updates at https://bbc.github.io/psammead.

## Developing with Psammead

1. Find a Psammead component you wish you to use, in your project from the [directory of available packages](https://github.com/bbc/psammead/tree/latest/packages), or by running `npx lerna list` inside the repo.
2. To install the package in your local development, run:
   ```
   npm install @bbc/psammead-<component_name>
   ```
3. See the README for the respective the Psammead component, to see the required props, usage example and use-cases for it.

### Using multiple components locally

When making changes to a package locally if you want to pull those changes into another psammead package then the following command will create the required symlinks for you.

Run the following command to link all psammead packages up regardless of dependency version:

```
npm run install:packages --force-local
```

