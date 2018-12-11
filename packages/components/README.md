# Components

 ## What is a Psammead component?
 Fundamentally, Psammead components are intended to be:
 * Presentational
 * GEL-Compliant
 * Accessible

 ## What does that mean?
 ### Presentational
 When developing and using Psammead components, we try to maintain a very clear distinction between [presentational and container components, as they are described in this blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). 

 In summary, Psammead components should be almost exclusively concerned with how the component appears, and should avoid fetching or mutating data. Instead, these data fetching and mutating operations are split out into "container" components that can be entirely separate, and which can provide any necessary data or behaviour to presentational components via props.

 These principles help Psammead components be reused across fundamentally different projects and back-ends.

 ### GEL-Compliant
 GEL is the BBC's shared design language. All Psammead components should be built on the [GEL utility packages](../utilities/) defined in this repo, helping ensure they fit within GEL, and in turn provide a consistent user experience.

 ### Accessible
 Finally, Psammead components are built and tested against the [BBC News assistive technology guidelines](https://bbc-news.github.io/accessibility-news-and-you/). More information on building components to these guidelines can be found in the [project's contributing guide](../../CONTRIBUTING.md).