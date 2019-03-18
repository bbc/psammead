# Adopt react-intl as i18n library
## ADR-0001

* Status: proposed
* Deciders:
  * Articles Team
  * WS Team
* Date: 2019-03-18

## Context and Problem Statement

Psammead components need a stardardised approach to localisation, including date and time formatting and string translation.

## Decision Drivers

* Ease of adoption
* Documentation, community and online resources
* Maintainability
* Popularity / Number of Backers

## Considered Options

1. `react-intl`

Created and maintained by yahoo.

This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

It uses and builds on the Internationalization API built-in to JavaScript.

Features:
* Display numbers with separators.
* Display dates and times correctly.
* Display dates relative to "now".
* Pluralize labels in strings
* Support for 150+ languages.
* Runs in the browser and Node.js.

Developer Experience:

The documentation is good https://github.com/yahoo/react-intl/wiki

Support: 206 issues - 1 bug

Licensing: Free to use under the Yahoo Inc. BSD license. See the LICENSE file for license text and copyright information.

Examples:
https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl
https://medium.freecodecamp.org/internationalization-in-react-7264738274a0

---

1. `react-intl-native`

Created and maintained by Alibaba.

It is an improvement of `react intl` in that it adds functionality for supporting translations in Vanilla JS. React-intl only does this in React Components.

Features:
* It can do what we want i.e format numbers, times and dates
* Can run in both the browser and Node js so we will be covered when we finally work on * ding SPA support )
* Supports fetching of config files from a remote source e.g S3
* Seems like it was built for a specific reason; supporting translations in Vanilla JS. As * ’ll be using React components, I don’t think we have to worry about this.

Support:
* Quick responses on both issues and Pull requests
* 14 issues, 6 PRs

* Developer experience:
* Some parts of the docs aren’t grammatically correct. One will notice the errors but it’s not bad enough that one won’t be able to understand the docs.
* Noticed that there are several issues that are asking for new features that are available on react-intl but not on react-intl-universal. Seems like they aren’t actively working on new features at the moment. If the current version suits our needs, we won’t have to worry about this.

Licensing: BSD 3-Clause "New" or "Revised" License granted by Alibaba. License page info.

---

3. `fbt`

Created by facebook.

Features:
* Organizing your source text for translation
* Composing grammatically correct translatable UI
* Eliminating verbose boilerplate for generating UI

FBT works by transforming your `<fbt>` and `fbt(...)` constructs via Babel plugins. These plugins serve to extract strings from source and lookup translate payloads generated at build-time. FBT creates tables of all possible variations for the given fbt phrase and accesses this at runtime.

Developer Experience:
* Confusing syntax
* Not many resources found, rather than the docs which are not very clear
* https://facebookincubator.github.io/fbt/docs/api_intro
* https://twitter.com/fbopensource/status/1080883562293878784

Support: 18 issues - 1 bug. Low activity in community

Licensing: FBT is MIT licensed, as found in the LICENSE file.

4. Roll your own library

An i18n library developed internally.

Pros: custom-built to fit our needs
Cons: More developer resources needed to deliver an i18n library with the required feature set in time.

---

## Decision Outcome

There was a clear preference among developers for option 1. `react-intl` as it is the most straight-forward and fully-supported option, providing the best developer experience out of all three. It was also the easiest to integrate into Psammead, as can be seen here: https://paper.dropbox.com/doc/2019-02-21-Component-Library-Meeting-i18n--AZgQeBdv~qXuQnL9jK5rcz4XAg-hSXxc23xnF6U7xnEkXwPc
