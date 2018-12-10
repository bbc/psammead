<h1 align="center">:sparkles: Psammead - BBC Component Library :sparkles:</h1>

<div align="center">

[![Known Vulnerabilities](https://snyk.io/test/github/bbc-news/psammead/badge.svg)](https://snyk.io/test/github/bbc-news/psammead)
[![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

</div>

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

## :rocket: Publishing Packages

### :gear: Setting up your npm account

- Create an npm account with your bbc email address. https://www.npmjs.com
- In your npm profile settings, set up Two Factor Authentication. Enable it for authorization and publishing
- Back up your recovery codes for your account
- Join the BBC npm org by following the process here: https://github.com/bbc/npm When you're added to the org and signed in, you should be able to see all public and private `@bbc` packages here: https://www.npmjs.com/settings/bbc/packages

### :balloon: Publishing a package

_We will be moving this process to CI in future. This is a temporary solution._

- Ensure you're on branch `latest` & have pulled the latest changes locally.
- `npm ci` and `npm run build`. This updates the `dist` directory for all packages. Note - this directory is currently not included in the git diff!
- In your terminal, run `npm login` and follow the steps for authentication
- `npm publish packages/<PATH_TO_PACKAGE> --otp=<YOUR_2FA_CODE>`
  e.g. `npm publish packages/components/psammead-paragraph --otp=<YOUR_2FA_CODE>`

### :tada: Making a package public

- `npm access public @bbc/<PACKAGE_NAME> --otp=<YOUR_2FA_CODE>`

### :roller_coaster: Deploying Storybook

The Psammead Storybook is hosted on GitHub pages at http://bbc-news.github.io/psammead. It is currently deployed via a local script that builds Storybook to the `gh-pages` git branch which is used by GitHub pages.

```
npm run deploy-storybook
```

NB, this automatically pushes to the 'gh-pages' branch, which deploys to the live GitHub pages site. Please only run this script on the `latest` branch.
