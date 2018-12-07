# Brand &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-brand.svg)](https://www.npmjs.com/package/@bbc/psammead-brand) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description	
The `Brand` component provides the BBC News logo (as SVG), nested inside a styled span, link and div. The link is currently hardcoded to "https://www.bbc.co.uk/news". `Brand` takes a `brandName` as a prop. This prop is passed to a [VisuallyHiddenText](../VisuallyHiddenText) component, nested inside Brand. Note that this does not currently affect the branding itself, which always renders as `BBC NEWS`.

## When to use this component	
The `Brand` component is designed to be used where a BBC logo is required as SVG. `Brand` is used in the [BrandContainer](../../containers/Brand), which consumes a service context it passes to the `Brand`. 

## Usage
`Brand` requires `babel-plugin-styled-components` as a dev dependency and must be added as a plugin to babel's config.

## Accessibility notes	
* Visually hidden text is provided (e.g. for screen reader users)
* `Brand` is keyboard-accessible and provides hover and focus styles

