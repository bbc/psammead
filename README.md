# Psammead - News React Component Library

## Getting Started

### Clone this repositry

```
git clone git@github.com:bbc-news/psammead.git
```

### Setup Local Environment

```
cd psammead && npm install
```

NB, this automatically runs `npm run install:packages` in a postinstall step for you.

### Run tests

Run the component tests:

```
npm test
```

This runs Jest across any packages matching this glob pattern: `packages/components/**/*.test.jsx`.

### Run Storybook

```
npm run storybook
```

NB, we've defined global styles (normalize, box-sizing, Reith font) in the [Storybook config](https://github.com/BBC-News/psammead/blob/latest/.storybook/config.js) so that components render as expected.

### Build Packages/Components

```
npm run build
```

## Using Psammead components

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
`"ssr": true`  ensures that when you have server-side rendering, that there won't be a checksum mismatch between the StyledComponent class on the server render and client render.
`"filename": false` This is to shorten the class names.

[See documentation on the Styled Components site](https://www.styled-components.com/docs/tooling#babel-plugin)

## Publishing Packages

### Setting up your npm account

- Create an npm account with your bbc email address. https://www.npmjs.com
- In your npm profile settings, set up Two Factor Authentication. Enable it for authorization and publishing
- Back up your recovery codes for your account
- Join the BBC npm org by following the process here: https://github.com/bbc/npm When you're added to the org and signed in, you should be able to see all public and private `@bbc` packages here: https://www.npmjs.com/settings/bbc/packages

### Publishing a package

- In your terminal, run `npm login` and follow the steps for authentication
- `npm publish packages/<PATH_TO_PACKAGE> --otp=<YOUR_2FA_CODE>`
  e.g. `npm publish packages/components/psammead-paragraph --otp=<YOUR_2FA_CODE>`

### Making a package public

- `npm access public @bbc/<PACKAGE_NAME> --otp=<YOUR_2FA_CODE>`
