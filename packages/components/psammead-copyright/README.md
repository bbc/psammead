# psammead-copyright &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-copyright.svg)](https://www.npmjs.com/package/@bbc/psammead-copyright) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

### Description
Displays the source attribution of an image in block capitals in the bottom-right of the parent element. 

### When to use this component
This component is intended to be used alongside images or diagrams contained within a [Figure component](../).

### When not to use this component
This component should not be used arbitrarily to represent source attribution across the page. As above, it is not intended to be used outside the [Figure component](../). The accessibility text would be incorrect and potentially confusing.

Do not use this component if you know the source attribution is already covered by another copyright disclosure on the page, such as in the [Footer component](../../Footer).

### Accessibility notes
The default styling of this component is intended to comply with WCAG colour contrast standards.