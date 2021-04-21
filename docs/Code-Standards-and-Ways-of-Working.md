# Code standards

## Documentation index

Please familiarise yourself with our:

- [Code of conduct](../.github/CODE_OF_CONDUCT.md)
- [Code Standards and Ways of Working](./Code-Standards-and-Ways-of-Working.md) (you are here)
- [Contributing and developing guidelines](./CONTRIBUTING.md)
- [Guide to Code Reviews](https://github.com/bbc/simorgh/blob/latest/docs/Code-Reviews.md)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [Primary README](../README.md)
- [Versioning and changelogs](../CONTRIBUTING.md#versioning-and-changelogs)
- [Use/consumption of Psammead packages guidelines and package list](../packages/README.md)

NB there is further documentation colocated with relevant packages and code. The above list is an index of the top-level documentation of our repo (and our sibling repo [Simorgh](https://github.com/bbc/simorgh)).

## Overview

We follow the project board guide here: [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
We also generally follow the code standards written in our sibling repo: [Simorgh Code Standards](https://github.com/bbc/simorgh/blob/latest/docs/Code-Standards.md)

## Psammead specific standards:

### We use REMs

The REM unit represents a size relative to the root element (e.g., the `font-size` of `<html>`). Unlike the EM, which may be different for each element, the REM is constant throughout the document. Therefore spacing will be global across `Psammead`. So when we create a constant expressed in REMs (e.g. `export const GEL_SPACING = '0.5rem'`) that value, or values based of that value, stay constant, which adds simplicity from a developer perspective.

Further information on REM:

- https://developer.mozilla.org/en-US/docs/Web/CSS/length
- https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
- https://zellwk.com/blog/rem-vs-em/

### Visual regression / screenshot compare testing

#### Introduction to ChromaticQA

[Chromatic Docs](https://docs.chromaticqa.com/)

ChromaticQA is a visual regression tool for storybook maintained by Storybook. The purpose of having chromaticQA run on all stories is to capture unwanted visual changes introduced by every change done to the code base. This reduces the overhead on manual regression as it supports screenshot comparisons for Chrome, IE and FF.

#### Running Test

ChromaticQA runs as a part of the build. The builds can be seen here (https://www.chromaticqa.com/builds?appId=5d28eb3fe163f6002046d6fa)

To run chromatic locally export the app code in bash profile(`export CHROMATIC_APP_CODE=<app-code>`) and run `npx chromatic test run --build-script-name build:storybook || true`

- When the tests are run first it creates the baselines screenshots unreviewed for all the browsers enabled in the settings.
- Each new build creates snapshots of the components which are compared with the baseline screenshots and unchanged ones are automatically accepted and changed ones needs review(accordingly it has to be accepted or denied). If there are new components added they are listed under new components.
- Each story has its own baseline that is tracked independently on each branch. When you approve a snapshot you also update the baseline for that story.

Chromatic
Advantages

- We do not have to manage any infrastructure kind of stuff as it is maintained by the storybook people.
- Run time for chrome and IE together is approx 6-8m.

### Accessibility testing

When you add a component to this repository, you should carry out an Accessibility Swarm, ideally including team members from multiple disciplines and using [the Assistive Technology we support](../README.md#assistive-technology-support).

For changes to an existing component, a shorter swarm with fewer people should be conducted.

[Here are detailed steps on how to run accessibility swarms.](https://bbc.github.io/accessibility-news-and-you/accessibility-swarms)

As a result of the swarm, you may find some issues with your implementation. These should be documented and where relevant, [GitHub Issues](https://github.com/bbc/psammead/issues/new?template=bug_report.md) should be raised.

### Storybook

If the component is publicly available in Storybook you can preview this on any device. Don't forget to follow the [testing steps](https://bbc.github.io/accessibility-news-and-you/accessibility-and-testing-with-assistive-technology) and use [supported assistive technology](https://bbc.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology).

#### Open the component in a tab

Storybook publishes components in an iframe within the Storybook UI, this will be acknowledged by assistive technology such as a screen reader, it's therefore recommended to **view/open the component in another tab** to the Storybook UI, you can then see the component code in isolation without the iframe and Storybook UI.

### Local code in Storybook

If you have a PR that is not yet merged and you need to preview this on another device, you can do so in Storybook via tunnelling:

- Install packages ‘yarn install:packages’
- Run storybook ‘yarn storybook’
- Run your tunnelling tool on the Storybook port
- In Storybook [open the component in another tab](#open-the-component-in-a-tab)

### After merge

After merging a pull request into `latest` the CI pipeline publishes the new package versions to npm and the Psammead Storybook to github pages at https://bbc.github.io/psammead. Once the pipeline runs successfully:

- Confirm the version update with `npm show {pkg} version`.
- Confirm storybook updates at https://bbc.github.io/psammead.
