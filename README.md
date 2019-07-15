<h1 align="center">:sparkles: Psammead - BBC Component Library :sparkles:</h1>

<div align="center">

[![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg)](https://snyk.io/test/github/bbc/psammead)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f7b756f1358f3633362/maintainability)](https://codeclimate.com/github/bbc/psammead/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3f7b756f1358f3633362/test_coverage)](https://codeclimate.com/github/bbc/psammead/test_coverage)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

</div>

Psammead is a [GEL-compliant](https://www.bbc.co.uk/gel/articles/what-is-gel) React component library for the BBC, built on [`styled-components`](https://www.styled-components.com).

Psammead packages are split into:

- [Components](./packages/components) - GEL-compliant presentational React components, ready for use out of the box, regardless of data source.
- [Utilities](./packages/utilities) - Commonly shared Psammead dependencies, and fundamentals to aid building additional GEL-compliant components.

## :gift: Getting Started

### :airplane: Clone this repository

```
git clone git@github.com:bbc/psammead.git
```

### :hammer: Setup Local Environment

```
cd psammead && npm run install:packages
```

N.B. When merging branches, the `npm run install:packages` command should be favoured over `npm install`. [More details available here](https://github.com/bbc/psammead/pull/264).

### :runner: Run tests

Install dependencies locked to `package-lock.json`:

```
npm run ci:packages
```

(NB: You can't reliably run the jest tests when the packages are linked locally, as they may have been linked across breaking changes. Running `npm run ci:packages` resets all links. To update snapshots within unit tests, run `npm run updateSnapshots`.)

Run the component tests:

```
npm test
```

This runs Jest across any packages matching this glob pattern: `packages/components/**/*.test.jsx`. It also runs each package's `npm test` command if it is defined.

### :runner: Run Storybook

```
npm run storybook
```

NB, we've defined global styles (normalize, box-sizing, Reith font) in the [Storybook config](https://github.com/bbc/psammead/blob/latest/.storybook/config.js) so that components render as expected.

### :construction_worker: Build Packages/Components

```
npm run build
```

## :computer: Developing with Psammead

Please refer to the [Psammead component guide](https://github.com/bbc/psammead/blob/latest/packages/components/README.md)

When making changes to a package locally if you want to pull those changes into another psammead package then the following command will create the required symlinks for you.

### :link: Link packages locally

Run the following command to link all psammead packages up regardless of dependency version:

```
npm run install:packages:link
```

## :dizzy: [Using Psammead](https://github.com/bbc/psammead/blob/latest/packages/components/README.md)

## :bar_chart: Support levels

We strive for components to conform to the following minimum levels of support, but please check each component's individual README.

### Browser support

| Browser              | Lowest version |
| -------------------- | -------------- |
| Safari               | 9              |
| Chrome               | 53             |
| Edge                 | 37             |
| Firefox              | 45             |
| IE                   | 11             |
| Opera                | 40             |
| Opera Mini           | 18             |
| Android Browser      | 7              |
| Android Chrome       | 53             |
| Android Firefox      | 49             |
| IOS Safari           | 10             |

Note that these browser support levels have been defined by usage statistics for BBC News and BBC Persian.

### Assistive Technology Support

| Software                 | Version | Type               | Browser              |
| ------------------------ | ------- | ------------------ | -------------------- |
| ZoomText                 | Latest  | screen magnifier   | Internet Explorer 11 |
| Dragon NaturallySpeaking | 13      | speech recognition | Internet Explorer 11 |
| JAWS                     | 17      | screen reader      | Internet Explorer 11 |
| Read&Write               | Latest  | screen reader      | Internet Explorer 11 |
| VoiceOver                | Latest  | screen reader      | Safari on iOS        |
| NVDA                     | Latest  | screen reader      | Firefox on Windows   |

[Testing instructions for each assistive technology](https://bbc.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology), including priority categories.

## :rocket: Publishing Packages

### :gear: Setting up your npm account

- Create an npm account with your bbc email address. https://www.npmjs.com
- In your npm profile settings, set up Two Factor Authentication. Enable it for authorization and publishing
- Back up your recovery codes for your account
- Join the BBC npm org by following the process here: https://github.com/bbc/npm When you're added to the org and signed in, you should be able to see all public and private `@bbc` packages here: https://www.npmjs.com/settings/bbc/packages

### :balloon: Publishing a package

Packages are published on merge into the `latest` branch via our CI process. The process defaults to publishing with `public` access and a tag of `latest`, however this can be overridden using configuration on your package json.

To stop your package from publishing to NPM add the following value to your `package.json`

```
"private": true,
```

The access and tag of the release can be overridden from the default values by adding the following values to your `package.json`

```
"publishConfig": {
  "access": "restricted",
  "tag": "alpha",
}
```

The access value is [restricted by NPM](https://docs.npmjs.com/misc/config#access) and can only be the values `public` and `restricted`.

### :roller_coaster: Deploying Storybook

The Psammead Storybook is hosted on GitHub pages at http://bbc.github.io/psammead. It is currently deployed via a local script that builds Storybook to the `gh-pages` git branch which is used by GitHub pages.

```
npm run deploy-storybook
```

NB, this automatically pushes to the 'gh-pages' branch, which deploys to the live GitHub pages site. Please only run this script on the `latest` branch.

### Contact

Psammead is currently maintained by developers in the BBC Articles and Reach + Languages teams. If you want to open an issue, please add it to our [issues page](https://github.com/bbc/psammead/issues).

Contact us by email on [PsammeadMaintainers@bbc.co.uk](mailto:PsammeadMaintainers@bbc.co.uk), or find us on Slack at #psammead in the bbcnews workspace.

### The name?

<img align="right" width="250" alt="Image of the Psammead from the BBC TV program Five Children and It (2004)" src="http://www.bbc.co.uk/staticarchive/c1c9a6055cf3c6e4eb476a70186e597ea15e6cf7.jpg">

Pronounced as `sam-me-ad` 'sæmiː|æd

"The Psammead, also known as Sand Fairy, is a sapient magical creature once encountered by five children in a gravel pit".

It MIGHT stand for:

**P**erfectly **s**harable **a**tomically **m**odular **m**agically **e**ngineered **a**bstract **d**oodads

Or it _might_ be named Psammead to follow the mythical creature theme of [related repos](https://github.com/bbc/simorgh).

We'll let you decide!
