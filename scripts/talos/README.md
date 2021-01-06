# Talos - package bumping bot

## Documentation index

Please familiarise yourself with our:

- [Code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)
- [Code Standards and Ways of Working](https://github.com/bbc/psammead/blob/latest/Code-Standards-and-Ways-of-Working.md)
- [Contributing guidelines](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)
- [Guide to Code Reviews](https://github.com/bbc/simorgh/blob/latest/docs/Code-Reviews.md)
- [Github Project Board Guide](https://github.com/bbc/simorgh/blob/latest/docs/Project-Board-Guide.md)
- [Primary README](https://github.com/bbc/psammead/blob/latest/README.md)
- [Talos (package bumping bot)](https://github.com/bbc/psammead/blob/latest/scripts/talos/README.md) (you are here)
- [Use/consumption of Psammead packages guidelines and package list](https://github.com/bbc/psammead/blob/latest/packages/README.md)

NB there is further documentation colocated with relevant packages and code. The above list is an index of the top-level documentation of our repo (and our sibling repo [Simorgh](https://github.com/bbc/simorgh)).

## Description

Talos is a bumper bot which runs automatically on the latest branch of Psammead. Talos was created to make life easier for developers, with Talos they do not need to keep track of their dependencies. It saves time, makes sure dependencies are up to date and it will prevent a duplicate package bundle from existing in external applications when multiple Psammead packages are used. Furthermore, it bumps all required packages in only the same number of PRs as the package tree depth, therefore it is quicker to review PRs, whereas another tool, such as Dependabot, would do the same in far more PRs.

[Simorgh](https://github.com/bbc/simorgh) uses `inspectpack` which checks if there are any duplicate package bundles in its application, if packages are duplicated they will not be accepted and will be flagged.

Talos solves this issue as it ensures the package version is the same across the whole monorepo and component library of packages (Psammead).

## Manual Usage

### Using CLI (not recommended)

Talos uses the Github API, therefore requires a token. Talos can be used if you setup the Github token, but it is not recommended. If this is needed, your GitHub token must be available as an environment variable called `GITHUB_TOKEN`.

## FAQs

#### How to review PRs?

PRs can be reviewed like any other PR. The PRs should be tested according to what is being bumped.

#### How do we test Talos PRs?

If the PR just updates the dev dependencies there wouldn't be any testing required from the test team, but if there are other dependencies updated then a regression testing along with testing of the changes that have gone in that version for the individual component is generally advisable.

#### When a Talos PR gets conflicts how can I rebase/recreate it?

Manually invoking Talos and entering the packages you want to bump can resolve conflicts.

#### Does Talos auto-update itself with the latest branch?

Talos only runs on latest therefore does not need to.

#### Does Talos handle the package bumping and changelog?

Yes. When you make a Psammead package change you publish a new version of it.

When these changes are published, Talos will find where the packages are used across Psammead and will bump them, increasing the version number. It then writes a changelog, makes a branch and creates a pull request.

Developers and testers need to review, (if applicable) test and merge the PR.

#### How does Talos treat Release Candidate, alpha, beta and v0.X package versions?

They are ignored by Talos as it only updates to the `latest` release of dependancies.

#### When Psammead is up to date how do I pull changes in to my application?

You can go into your application and update your `package.json` to include the recently published psammead packages. Then run `npm install`.

#### I don't see why I wouldn't want to try to update everything, how do I invoke it with \*/ALL packages being updated?

You would only want to bump packages for components that you have actually changed. This is to reduce the complexity of the PRs generated, allows reviewers to focus on components changed and speeds up testing.

#### Who is Talos?

In Greek mythology, Talos, also spelled Talus, was a giant automaton made of bronze to protect Europa in Crete from pirates and invaders. In BBC mythology, Talos is a bumper bot made out of code to protect developers from themselves. <img align="right" alt="Winged 'ΤΑΛΩΝ' armed with a stone." width="250" height="250" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Didrachm_Phaistos_obverse_CdM.jpg">
