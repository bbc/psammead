# Contributing

## Documentation index

Please familiarise yourself with our:

- [Code of conduct](./.github/CODE_OF_CONDUCT.md)
- [Code Standards and Ways of Working](./docs/Code-Standards-and-Ways-of-Working.md)
- [Contributing guidelines](./CONTRIBUTING.md) (you are here)
- [Guide to Code Reviews](https://github.com/bbc/simorgh/blob/latest/docs/Code-Reviews.md)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [Primary README](./README.md)
- [Versioning and changelogs](./CONTRIBUTING.md#versioning-and-changelogs)
- [Use/consumption of Psammead packages guidelines and package list](./packages/README.md)

NB there is further documentation colocated with relevant packages and code. The above list is an index of the top-level documentation of our repo (and our sibling repo [Simorgh](https://github.com/bbc/simorgh)).

## Overview

We welcome feedback and help with Psammead. By participating in Psammead, you agree to abide by the [Code of Conduct](./.github/CODE_OF_CONDUCT.md). Please take a moment to read it.

We appreciate all forms of contribution - not just code. Contribution can include adding documentation, requesting clarification, making typo corrections and much more.

Psammead's "Definition of Done" is not only when a package is published but when all the Psammead packages that consume that package are updated. See [Versioning and changelogs](./CONTRIBUTING.md#versioning-and-changelogs) to automate much of this bumping process.

Fundamentally, Psammead components are intended to be:

Presentational (most of them, we do have other kinds of packages)
GEL-Compliant
Accessible

### What does that mean?

#### Presentational

When developing and using Psammead components, we try to maintain a very clear distinction between [presentational and container components, as they are described in this blog post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

In summary, Psammead components should be almost exclusively concerned with how the component appears, and should avoid fetching or mutating data. Instead, these data fetching and mutating operations are split out into "container" components that can be entirely separate, and which can provide any necessary data or behaviour to presentational components via props.

These principles help Psammead components to be reusable across fundamentally different projects and back-ends.

#### GEL-Compliant

GEL is the BBC's shared design language. All Psammead components should be built on the [GEL utility packages](../utilities/) defined in this repo, helping ensure they fit within GEL, and in turn provide a consistent user experience.

#### Accessible

Finally, Psammead components are built and tested against the [BBC News assistive technology guidelines](https://bbc.github.io/accessibility-news-and-you/). More information on building components to these guidelines can be found in the [project's contributing guide](./CONTRIBUTING.md).

## Developing with Psammead

### Edit existing packages

1. Find a Psammead component you wish you to work on, in your project from the [directory of available packages](https://github.com/bbc/psammead/tree/latest/packages), or by running `npx lerna list` inside the repo.
2. To install the package in your local development, run:
   ```
   yarn add @bbc/psammead-<component_name>
   ```
3. See the README for the respective the Psammead component, to see the required props, usage example and use-cases for it.

### Developing with multiple components locally

We use Yarn Workspaces in the Psammead project. Yarn Workspaces installs all packages and creates symlinks between packages that depend on each other in a single pass with `yarn install`.

With symlinked packages we can make changes in one Psammead package and the changes will be reflected in other Psammead packages that have the changed package as a dependency. Please note that you will have to run `yarn build` after making changes to your changes reflected in other packages.

### Versioning and changelogs

Versioning packages and updating changelogs is currently a manual process. This is made easier with a couple of scripts as described in the steps below.

To increment the version of any package, from the root of the project run:

```
yarn packages:version
```

You will be prompted to select the packages you are versioning and the semver version you are incrementing (major, minor or patch).

Next you'll need to update the changelogs. Before you do this you'll need to commit the versioning changes that `yarn packages:version` made, push these to your remote branch and make a pull request. Copy the link to your pull request as we'll need this in the next step.

From the root of the project run:

```
yarn changelogs:update
```

You will be prompted to select the packages you are updating the changelogs for - this will be the same packages you selected in the previous step. Then you will be prompted for the link to your pull request. Paste in the link you copied. Next, enter a short description of the changes you have made so that consumers of the package(s) can find out what changes are in this release.

If the package you have updated is used in another Psammead package then you'll need to update the version of the package that uses it too. To check if this is the case you can run:

```
yarn packages:check
```

This runs a tool called [`Manypkg`](https://github.com/Thinkmill/manypkg) that performs a number of [checks](https://github.com/Thinkmill/manypkg#checks) including a check that we don't have [internal package version mismatches](https://github.com/Thinkmill/manypkg#internal-mismatch).

If you see errors after running this tool then you can fix them by running:

```
yarn packages:fix
```

Now that versioning and changelogs are up-to-date you can push your changes up to your remote branch.

## The package publish, deprecation, and alpha publication process

<!-- TODO: Add a package publish section -->

### Package deprecation

Please refer to [Deprecating a Package](./docs/Deprecating-a-Package.md) for guidelines on Psammead package deprecation.

### Alpha Components

#### Description

The purpose of an Alpha Component is to allow an engineer to work on a component, merge it into Psammead and publish it to npm before it is ready for use in production.

#### Use Cases

The accepted uses of an Alpha Component are:

- When engineering do not have all of the acceptance or accessibility criteria yet but want to make a start on building the component (with the agreement they may need to change it based on the finalised criteria).
- When a component needs to be merged into Psammead and published, then pulled into Simorgh in order to UX review or a11y test it properly.
- This means that an Alpha component does not need a UX review or a11y swarm when it is first merged into Psammead, only when it needs to come out of Alpha.

#### Workflow

- A new component is created in Psammead, the version is set to `0.1.0-alpha.1`, and "tag": "alpha" is added to the publish config in the package.json, e.g [alpha tag example](https://github.com/bbc/psammead/commit/64d7aa18a6b6d0861c9fdcd1b88047e634376bb7#diff-19d4d1f1939749aaffae0b8080cc09f4R37-R38)
- An alpha component warning is added to the top of the README, e.g [alpha warning example](https://github.com/bbc/psammead/commit/eb794cb4b18eb3c0f5857bc5e5476f92fbc7c1cc#diff-4124748292798b73a7d123a33fc255faR1-R3)
- The component can then be worked on, merged into latest in Psammead and published to npm under the alpha tag.
- In order to come out of Alpha, the component needs to have had a full a11y swarm, a UX review if required, and all necessary criteria met.
- The component can then be set to a normal version of `1.0.0`, and the alpha tag and warning in the ReadMe can be removed.

#### Prerequisites & Conditions

- The component can be used in branches in Simorgh that are **not** `latest` in order for UX to review it in a page, and for easier a11y testing to take place.
- The alpha component **CAN NOT** be used in a live/production page.
- Any P1 bugs that come out of the a11y swarm need to be fixed before the component comes out of Alpha and goes live, P2 and lower can be fixed after.
- For functional issues the functionality must work on the biggest browsers on the services it's released on. This can be worked out by looking at a combination of our [browser support](https://github.com/bbc/psammead#bar_chart-support-levels) and browser usage statistics for different services.
