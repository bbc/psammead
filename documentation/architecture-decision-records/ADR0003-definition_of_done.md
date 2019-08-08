# Definition of Done
## ADR-0003

* Status: Proposed
* Deciders:
  * Articles Team
  * WS Team
* Date: 2019-08-08

## Context

We require a definitive description of when a particular piece of work in Psammead can be considered done.

### Decision Drivers

* An accessibility swarm can take time to organise. If we block merging into Psammead for time to arrange this, it could slow down development.
* We want to test components as early as possible - before they've been merged and integrated into the application.
* We want to ensure we have a balance that keeps high standards yet allows fast development.

## When working on PRs that are not yet ready for production use:

Use an alpha version - is where `package.json` / `package-lock.json` version has format `0.0.0.alpha.0` & `alpha tag`.

- This is an industry standard way to enable publishing a package that is not yet ready for use in a production environment.
- We should never use alpha versions of components in our production application.

Follow the [developers checklist](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-developers) to help you code with accessibility in mind.

- Each Psammead PR that changes the UI should include checking local code with assistive technology (which could just be testing with VoiceOver on your Mac)

No change with how test engineers test these PRs.

## When changing from alpha to production-ready:

Create an issue for changing from an alpha version to a production version (e.g. `1.0.0.alpha.0` to `1.1.0`).

- The relevant PR to update the version can only be merged after an [Accessibility Swarm](https://bbc-news.github.io/accessibility-news-and-you/accessibility-swarms) has taken place.

We use our resources and time effectively and therefore have different levels of swarms - Developer and Team. As a general rule, you can follow the following guidance (these are not hard and fast rules. Confirm what makes sense for your project with the Accessibility Lead):

#### Developer accessibility swarm for:
- Components that are intended to be used by other components and not intended to be used in isolation i.e. a component part or sub component of a feature

For example, [image caption](https://bbc.github.io/psammead/?path=/story/caption--default) would be considered a component part or sub component

- A small change to a live component

For example - changing a color, etc.

#### Team accessibility swarm for:
- Something that won’t form part of another component - e.g. a full component or feature

An example of this is [figure with caption](https://bbc.github.io/psammead/?path=/story/figure--containing-image-imageplaceholder-copyright-and-caption)

- A substantial change to a live component

If the accessibility swarm is being carried out on an open PR, this should be done after code reviews, when in the A11y review column, prior to being moved to ready for test

Accessibility swarms (developer or team) should always complete the [swarm checklist](https://bbc-news.github.io/accessibility-news-and-you/accessibility-news-and-testers) including testing with all [supported AT](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology).

If there are any P1 (priority 1) accessibility issues, they must be addressed before moving from an alpha version to a production version.

Full browser testing on supported browsers can be carried out at this time. https://github.com/bbc/psammead#bar_chart-support-levels
