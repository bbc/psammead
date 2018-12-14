# Utilities

## What are Psammead utilities?
In addition to components, Psammead contains a selection of utility packages. These include dependencies common to many Psammead components or users, as well as more generic packages to aid the building of other BBC components in a GEL-compliant way.

### Overview
* [gel-constants](./gel-constants) - A range of String constants for use in CSS, intended to help ensure GEL-compliance in components and other web-based projects in a consistent way.
* [gel-foundations-styled-components](./gel-foundations-styled-components) - A range of styled-components, implementing GEL guidelines.
* [psammead-assets](./psammead-assets) - A collection of common assets that are likely to be required by many Psammead components or users.
* [psammead-styles](./psammead-styles) - A collection of String constants for use in CSS, containing non-GEL styling details.
* [psammead-test-helpers](./psammead-test-helpers) - A collection of helper methods for implementing Jest snapshot tests for styled-components, required by many Psammead components.

### Adding further utilities
In order to be added to Psammead, new utility packages should:
* be common requirements of many of the repo's components, or many of the repo's users.
* contain realistic usage examples.
