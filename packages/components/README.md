# Components

Psammead components are intended to be:

### Presentational

When developing and using Psammead components, we try to maintain a very clear distinction between [presentational and container components, as they are described in this blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

In summary, Psammead components should be almost exclusively concerned with how the component appears, and should avoid fetching or mutating data. Instead, these data fetching and mutating operations are split out into "container" components that can be entirely separate, and which can provide any necessary data or behaviour to presentational components via props.

These principles help Psammead components to be reusable across fundamentally different projects and back-ends.

### GEL-Compliant

GEL is the BBC's shared design language. All Psammead components should be built on the [GEL utility packages](../utilities/) defined in this repo, helping ensure they fit within GEL, and in turn provide a consistent user experience.

### Accessible

Finally, Psammead components are built and tested against the [BBC News assistive technology guidelines](https://bbc-news.github.io/accessibility-news-and-you/). More information on building components to these guidelines can be found in the [project's contributing guide](../../CONTRIBUTING.md).

## :nut_and_bolt: Using Psammead components

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

`"ssr": true` ensures that when you have server-side rendering, there won't be a checksum mismatch between the StyledComponent class on the server re  
nder and client render.

`"filename": false` This is to prevent the filename from appearing in the generated class name, which would generally be a duplication of the component name.

[See documentation on the Styled Components site](https://www.styled-components.com/docs/tooling#babel-plugin)

**NOTE**: if you run into issues with CSS not being applied to your components, it is likely that there is a duplicate `styled-components` dependency somewhere in your packages. You can try running [`npm dedupe`](https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules) in most cases, or [`lerna bootstrap --hoist`](https://www.styled-components.com/docs/faqs#usage-with-lerna) in monorepo setups such as Psammead's. Failing that, make sure your application's `styled-components` dependency is the same version as that in Psammead.

## :fork_and_knife: Consuming Psammead components - pre-requisite

These components have been tested in an environment which uses [normalize](https://github.com/necolas/normalize.css) and [`box-sizing: border-box`](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) for consistent behaviour across browsers. Additionally, many components depend on the BBC Reith font having been defined.

You can do this in pure CSS:

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.0/normalize.css"
/>
<style>
  /* Box Sizing https://bit.ly/1A91I0J */
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  @font-face {
    font-display: optional;
    font-family: 'ReithSans';
    font-style: normal;
    font-weight: 400;
    src: url('https://gel.files.bbci.co.uk/r2.511/BBCReithSans_W_Rg.woff2')
        format('woff2'), url('https://gel.files.bbci.co.uk/r2.511/BBCReithSans_W_Rg.woff')
        format('woff');
  }
  @font-face {
    font-display: optional;
    font-family: 'ReithSerif';
    font-style: normal;
    font-weight: 600;
    src: url('https://gel.files.bbci.co.uk/r2.511/BBCReithSerif_W_Md.woff2')
        format('woff2'), url('https://gel.files.bbci.co.uk/r2.511/BBCReithSerif_W_Md.woff')
        format('woff');
  }
</style>
```

Or if you're using [styled-components](https://styled-components.com), you can use [styled-normalize](https://www.npmjs.com/package/styled-normalize) (`npm install styled-normalize`) and `createGlobalStyle` to [manage global styles as has been done in Simorgh](https://github.com/bbc/simorgh/blob/latest/src/app/lib/globalStyles.js).

## :nut_and_bolt: Using Psammead components

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

`"ssr": true` ensures that when you have server-side rendering, there won't be a checksum mismatch between the StyledComponent class on the server re  
nder and client render.

`"filename": false` This is to prevent the filename from appearing in the generated class name, which would generally be a duplication of the component name.

[See documentation on the Styled Components site](https://www.styled-components.com/docs/tooling#babel-plugin)

**NOTE**: if you run into issues with CSS not being applied to your components, it is likely that there is a duplicate `styled-components` dependency somewhere in your packages. You can try running [`npm dedupe`](https://www.styled-components.com/docs/faqs#duplicated-module-in-node_modules) in most cases, or [`lerna bootstrap --hoist`](https://www.styled-components.com/docs/faqs#usage-with-lerna) in monorepo setups such as Psammead's. Failing that, make sure your application's `styled-components` dependency is the same version as that in Psammead.
