<h1 align="center">:sparkles: Psammead - BBC Component Library :sparkles:</h1>

<div align="center">

[![Known Vulnerabilities](https://snyk.io/test/github/bbc-news/psammead/badge.svg)](https://snyk.io/test/github/bbc-news/psammead)
[![Maintainability](https://api.codeclimate.com/v1/badges/3f7b756f1358f3633362/maintainability)](https://codeclimate.com/github/BBC-News/psammead/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3f7b756f1358f3633362/test_coverage)](https://codeclimate.com/github/BBC-News/psammead/test_coverage)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badges/storybook.svg?sanitize=true)](https://bbc-news.github.io/psammead)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

</div>

Psammead is a [GEL-compliant](https://www.bbc.co.uk/gel/articles/what-is-gel) React component library for the BBC, built on [`styled-components`](https://www.styled-components.com). 

 Psammead packages are split into:
 * [Components](./packages/components) - GEL-compliant presentational React components, ready for use out of the box, regardless of data source.
 * [Utilities](./packages/utilities) - Commonly shared Psammead dependencies, and fundamentals to aid building additional GEL-compliant components.

## :gift: Getting Started

### :airplane: Clone this repositry

```
git clone git@github.com:bbc-news/psammead.git
```

### :hammer: Setup Local Environment

```
cd psammead && npm install
```

NB, this automatically runs `npm run install:packages` in a postinstall step for you.

### :runner: Run tests

Run the component tests:

```
npm test
```

This runs Jest across any packages matching this glob pattern: `packages/components/**/*.test.jsx`.

### :runner: Run Storybook

```
npm run storybook
```

NB, we've defined global styles (normalize, box-sizing, Reith font) in the [Storybook config](https://github.com/BBC-News/psammead/blob/latest/.storybook/config.js) so that components render as expected.

### :construction_worker: Build Packages/Components

```
npm run build
```
## :dizzy: Using Psammead

### :fork_and_knife: Consuming Psammead components - pre-requisite

These components have been tested in an environment which uses [normalize](https://github.com/necolas/normalize.css) and [`box-sizing: border-box`](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) for consistent behaviour across browsers. Additionally, many components depend on the BBC Reith font having been defined.

You can do this in pure CSS:

```html
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.0/normalize.css" />
<style>
/* Box Sizing https://bit.ly/1A91I0J */
html {
  box-sizing: border-box;
  font-size: 100%;
}
*, *:before, *:after {
  box-sizing: inherit;
}

@font-face {
  font-display: optional;
  font-family: ReithSansNewsRegular;
  font-style: normal;
  font-weight: 400;
  src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff') format('woff');
}
@font-face {
  font-display: optional;
  font-family: ReithSerifNewsMedium;
  font-style: normal;
  font-weight: 600;
  src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff') format('woff');
}
</style>
```

Or if you're using [styled-components](https://styled-components.com), you can use [styled-normalize](https://www.npmjs.com/package/styled-normalize) (`npm install styled-normalize`) and `createGlobalStyle` to [manage global styles as has been done in Simorgh](https://github.com/BBC-News/simorgh/blob/latest/src/app/lib/globalStyles.js).

### :nut_and_bolt: Using Psammead components

Psammead components use `styled-components`.

We recommend when you use these in your application, to add the following setup:

`npm install --save-dev babel-plugin-styled-components`
This plugin adds support for server-side rendering, minification of styles, and a nicer debugging experience by giving meaningful names to the style classes.

Our recommended `.babelrc` config for this is here:

```
{
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "fileName": false
      }
    ]
  ]
}
```

`"ssr": true`  ensures that when you have server-side rendering, there won't be a checksum mismatch between the StyledComponent class on the server render and client render.

`"filename": false` This is to prevent the filename from appearing in the generated class name, which would generally be a duplication of the component name.

[See documentation on the Styled Components site](https://www.styled-components.com/docs/tooling#babel-plugin)

**NOTE**: if you run into issues with CSS not being applied to your components, it is likely that there is a duplicate `styled-components` dependency somewhere in your packages. You can try running [`npm dedupe`](https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules) in most cases, or [`lerna bootstrap --hoist`](https://www.styled-components.com/docs/faqs#usage-with-lerna) in monorepo setups such as Psammead's. Failing that, make sure your application's `styled-components` dependency is the same version as that in Psammead.

## :bar_chart: Support levels

We strive for components to conform to the following minimum levels of support, but please check each component's individual README.

### Browser support

| Browser              | Lowest version |
| -------------------- | -------------- |
| Safari               | 7              |
| Facebook for iPhone  | 187            |
| Chrome for iOS       | 68             |
| Chrome               | 25             |
| Edge                 | 14             |
| Firefox              | 48             |
| IE                   | 9              |
| Amazon Silk          | 69             |
| Opera Mini           | 4              |
| Android Browser      | 4              |
| Nokia                | 6280           |
| Firefox for iOS      | 13             |
| Facebook for Android | 190            |

Note that these browser support levels have been defined by usage statistics for BBC News and BBC Persian.

### Assistive Technology Support

| Software                 | Version | Type               | Browser              |
|--------------------------|---------|--------------------|----------------------|
| ZoomText                 | Latest  | screen magnifier   | Internet Explorer 11 |
| Dragon NaturallySpeaking | 13      | speech recognition | Internet Explorer 11 |
| JAWS                     | 17      | screen reader      | Internet Explorer 11 |
| Read&Write               | Latest  | screen reader      | Internet Explorer 11 |
| VoiceOver                | Latest  | screen reader      | Safari on iOS        |
| NVDA                     | Latest  | screen reader      | Firefox on Windows   |

[Testing instructions for each assistive technology](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology), including priority categories.

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

The Psammead Storybook is hosted on GitHub pages at http://bbc-news.github.io/psammead. It is currently deployed via a local script that builds Storybook to the `gh-pages` git branch which is used by GitHub pages.

```
npm run deploy-storybook
```

NB, this automatically pushes to the 'gh-pages' branch, which deploys to the live GitHub pages site. Please only run this script on the `latest` branch.

### Contact 

Psammead is currently maintained by developers in the BBC Articles and Reach + Languages teams. If you want to open an issue, please add it to our [issues page](https://github.com/BBC-News/psammead/issues).

Contact us by email on [PsammeadMaintainers@bbc.co.uk](mailto:PsammeadMaintainers@bbc.co.uk), or find us on Slack at #psammead in the bbcnews workspace. 

### The name?

<img align="right" width="250" alt="Image of the Psammead from the BBC TV program Five Children and It (2004)" src="http://www.bbc.co.uk/staticarchive/c1c9a6055cf3c6e4eb476a70186e597ea15e6cf7.jpg">

Pronounced as `sam-me-ad` 'sæmiː|æd

"The Psammead, also known as Sand Fairy, is a sapient magical creature once encountered by five children in a gravel pit".

It MIGHT stand for:

**P**erfectly **s**harable **a**tomically **m**odular **m**agically **e**ngineered **a**bstract **d**oodads

Or it _might_ be named Psammead to follow the mythical creature theme of [related repos](https://github.com/BBC-News/simorgh).

We'll let you decide!

