<!-- prettier-ignore -->
# psammead-grid - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-grid%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-grid%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-grid)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-grid) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-grid)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-grid&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/grid--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-grid.svg)](https://www.npmjs.com/package/@bbc/psammead-grid) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description


## Installation

`npm install @bbc/psammead-grid`

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| columns | object | yes | N/A | { group1: 6, group3: 8 } |
| startOffset | object | no | Sets all values as 1 for each of the groups defined in `columns`  | { group1: 2, group3: 3 } |
| wrapper | boolean | no | false | `wrapper` |
| enableGelGutters | boolean | no | false | `enableGelGutter` |
| enableGelMargins | boolean | no | false | `enableGelMargins` |
| enableGelMaxWidths | boolean | no | false | `enableGelMaxWidths` |
| enableGroupFourMaxWidth | boolean | no | false | `enableGroupFourMaxWidth` |

## Usage

We use the GEL Grid for our breakpoints, as well as for our standard gutters and margins. [The values are defined here in the GEL Grid documentation.](https://www.bbc.co.uk/gel/guidelines/grid#grid-sizes).

When we refer to `group3` in this component, we're referring to the breakpoint with a minimum width `GEL_GROUP_3_SCREEN_WIDTH_MIN` & a maximum width `GEL_GROUP_3_SCREEN_WIDTH_MAX`. These values are defined within [`@bbc/gel-foundations/breakpoints`](https://github.com/bbc/psammead/blob/latest/packages/utilities/gel-foundations/src/breakpoints.js).

####<a name="simple-example">Simple example</a>

Here is an example of a `Grid` `wrapper` that has 8 columns for `group4` (from 1008px to 1279px). It has two child `Grid` elements, one which spans 6/8 columns and one which spans 2/8 columns within this breakpoint.

```jsx
import Grid from '@bbc/psammead-grid';

const MyComponent = () => (
  <Grid wrapper columns={{ group4: 8 }}>
    <Grid columns={{ group4: 6 }}>
      <p>Paragraph that spans 6 out of 8 columns through group4</p>
    </Grid>
    <Grid columns={{ group4: 2 }}>
      <p>Paragraph that spans 2 out of 8 columns through group4</p>
    </Grid>
    <Grid columns={{ group4: 2 }}>
       <p>Paragraph that spans 2 out of 8 columns through group4</p>
    </Grid>
    <Grid columns={{ group4: 2 }}>
       <p>Paragraph that spans 2 out of 8 columns through group4</p>
    </Grid>
  </Grid>
);
```

####<a name="multiple-groups">Setting values for multiple groups</a>

```jsx
import Grid from '@bbc/psammead-grid';

const MyComponent = () => (
  <Grid wrapper columns={{ group3: 6, group4: 8 }}>
    <Grid columns={{ group3: 6, group4: 6 }}>
      <p>Paragraph - for group 3 spans 6/6 columns, for group 4 spans 6/8 columns</p>
    </Grid>
    <Grid columns={{ group3: 6, group4: 2 }}>
      <p>Paragraph - for group 3 spans 6/6 columns, for group 4 spans 2/8 columns</p>
    </Grid>
  </Grid>
);
```

[Screenshot of this example without GEL Gutters and GEL Margins](./documentation/Screenshot\ example\ without\ gelMargins\ and\ gelGutters.png)

####<a name="gutters-margins">Setting standard GEL gutters and GEL Margins</a>

Using `enableGelGutters` and `enableGelMargins` on the wrapper Grid element.

```jsx
import Grid from '@bbc/psammead-grid';

const MyComponent = () => (
	<Grid
		wrapper
		enableGelGutters
    enableGelMargins
		columns={{ group3: 6, group4: 8 }}
	>
    <Grid columns={{ group3: 6, group4: 6 }}>
      <p>Paragraph - for group 3 spans 6/6 columns, for group 4 spans 6/8 columns</p>
    </Grid>
    <Grid columns={{ group3: 6, group4: 2 }}>
      <p>Paragraph - for group 3 spans 6/6 columns, for group 4 spans 2/8 columns</p>
    </Grid>
  </Grid>
);
```

####<a name="nested-grid">Nested grid example</a>

Note that here, for each definition of a parent Grid, we need to use the `wrapper` prop. This sets the total number of columns via the `columns` prop. Then to define how many columns the child should span, you can use the `columns` prop on the child `Grid`.

```jsx
import Grid from '@bbc/psammead-grid';

const MyComponent = () => (
  <Grid
    wrapper
    columns={{ group2: 6, group3: 6 }}
  >
		<Grid
		  wrapper
      columns={{ group2: 6, group3: 6 }}
    >
      <Grid columns={{ group2: 6, group3: 3 }}>
        <ExampleImage />
      </Grid>
      <Grid columns={{ group2: 6, group3: 3 }}>
        <ExampleParagraph />
      </Grid>
    </Grid>
    <Grid columns={{ group2: 2, group3: 2 }}>
      <ExampleImage />
    </Grid>
    <Grid columns={{ group2: 4, group3: 4 }}>
      <ExampleParagraph />
    </Grid>
  </Grid>
);
```

[Screenshot of this example with GEL Gutters and GEL Margins enabled](./documentation/Screenshot\ example\ with\ gelMargins\ and\ gelGutters.png)

** Setting GEL Max Widths**
At the page level, you may want to have the GEL Grid's fixed max widths. 
You can enable it with the prop `enableGelMaxWidths`. 

For some pages, we will want to constrain the page to 1008px. You can use `enableGroupFourMaxWidth` for this. 

### When to use this component

This `Grid` component can be used for page-level layouts as well as for layouts of individual components. You can nest Grids within one another for more complex layouts. Please see the Storybook Stories for examples.

### Frequenty Asked Questions

- When should I use the `wrapper` prop?
  - The `wrapper` prop should be used on a parent Grid element. It defines the grid, using the `columns` prop's values to define how many columns to define at each breakpoint. 
  - It can and should be used whenever you're defining a new grid. [See nested grid example.](#nested-grid). It should be used in any case where you're defining a new nested grid.
- When should I use the `columns` prop?
  - This should always be defined. For a Grid element that is not a `wrapper`, it's the number of columns it should span.
- When should I use the `startOffset` prop?
  - `startOffset` is an object just like the `columns` prop. You can set it on a Grid child element to start it at a column other than the first one. 
  - If you don't pass it in, the value defaults to 1, the start of the grid.
- Why is there no vertical spacing on the grid?
    - The Grid implementation only has gutters/margins for columns, [according to the GEL specification](https://www.bbc.co.uk/gel/guidelines/grid#grid-sizes).  This is to allow flexibility for a variety of spacing. To add vertical spacing, you should add padding/margin/top/bottom to the contents.

<!-- ### When not to use this component -->

### Accessibility notes

Currently this component is in alpha. This is because it has not yet been tested with various assistive technologies. After it has had an accessibility swarm, this will be published under a standard version.

## Roadmap

Currently the fallback for browsers that don't support CSS Grid is that there are no gutters. We will implement a fix for this in a future version.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
