<h1 align="center">✨ Psammead - BBC Component Library ✨</h1>

<div align="center">

[![Test Coverage](https://api.codeclimate.com/v1/badges/b7c465069b1aacb64daa/test_coverage)](https://codeclimate.com/github/BBC-News/psammead/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/bbc-news/psammead/badge.svg)](https://snyk.io/test/github/bbc-news/psammead)
[![Maintainability](https://api.codeclimate.com/v1/badges/b7c465069b1aacb64daa/maintainability)](https://codeclimate.com/github/BBC-News/psammead/maintainability)
[![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](http://bbc-news.github.io/psammead)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

</div>

## 📦 Getting Started

### 🛬 Clone this repositry

```
git clone git@github.com:bbc-news/psammead.git
```

### 🛠 Setup Local Environment

```
cd psammead && npm install
```

NB, this automatically runs `npm run install:packages` in a postinstall step for you.

### 🏃‍♀️ Run tests

Run the component tests:

```
npm test
```

This runs Jest across any packages matching this glob pattern: `packages/components/**/*.test.jsx`.

### 🏃‍♂️ Run Storybook

```
npm run storybook
```

NB, we've defined global styles (normalize, box-sizing, Reith font) in the [Storybook config](https://github.com/BBC-News/psammead/blob/latest/.storybook/config.js) so that components render as expected.

### 👷🏽‍♀️ Build Packages/Components

```
npm run build
```

## 🚀 Publishing Packages

### ⚙️ Setting up your npm account

- Create an npm account with your bbc email address. https://www.npmjs.com
- In your npm profile settings, set up Two Factor Authentication. Enable it for authorization and publishing
- Back up your recovery codes for your account
- Join the BBC npm org by following the process here: https://github.com/bbc/npm When you're added to the org and signed in, you should be able to see all public and private `@bbc` packages here: https://www.npmjs.com/settings/bbc/packages

### 🎈 Publishing a package

- In your terminal, run `npm login` and follow the steps for authentication
- `npm publish packages/<PATH_TO_PACKAGE> --otp=<YOUR_2FA_CODE>`
  e.g. `npm publish packages/components/psammead-paragraph --otp=<YOUR_2FA_CODE>`

### 🎉 Making a package public

- `npm access public @bbc/<PACKAGE_NAME> --otp=<YOUR_2FA_CODE>`
