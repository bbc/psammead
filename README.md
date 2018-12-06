# Psammead - News React Component Library

# Getting Started

### Clone this repositry

```
git clone git@github.com:bbc-news/psammead.git
```

### Setup Local Environment

```
cd psammead && npm install
```

NB, this automatically runs `npm run install:packages` in a postinstall step for you.

### Run Storybook

```
npm run storybook
```

### Build Packages/Components

```
npm run build
```

### Publishing Packages

#### With 2FA on your NPM account

```
NPM_CONFIG_OTP=<2FA_Code> npm run publish
```

### Without 2FA

```
npm run publish
```
