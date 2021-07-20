# Deprecating a Package

## Why?
The Psammead repository contains packages that are actively being maintained. However packages in Psammead are occasionally replaced or moved out of Psammead – these are common examples of when a package should be deprecated.

## How?

### 1. Purge the package from Psammead
- Create a new branch.
- Delete the package root, e.g. `packages/components/psammead-caption`.
- Run `yarn remove -W <package-name>`.
- Remove the package from the list of all packages in the [Psammead packages directory](../packages/README.md#list-of-all-packages).
- Search the repository for any reference to the package that is being deprecated and remove it.
- Create a pull request from this branch.

### 2. Deprecate the package on NPM
Tell your NPM Admin to run the command below, supplying a message argument which will be used as a deprecation warning to those who try to install the package. 
```sh
npm deprecate @bbc/<package-name> "This package is no longer maintained."
```

## Reversal
If for some reason a package was deprecated by mistake or is reintroduced to Psammead, this process can be reversed by running `npm deprecate` with the message argument `""` (empty, with double quotes):

```sh
npm deprecate @bbc/<package-name> ""
```

## References
- [NPM deprecate docs](https://docs.npmjs.com/cli/v7/commands/npm-deprecate)
