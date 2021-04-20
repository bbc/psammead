# Deprecating a Package

## Why?
The Psammead repository contains packages that are actively being maintained. However packages in Psammead are occasionally replaced or moved out of Psammead – these are common examples of when a package should be deprecated.

<!-- TO DO -->
## How?

### 1. Purge the package from Psammead
- Create a branch
- Remove package root
- And all references

### 2. Deprecate the package on NPM
- Tell your NPM Admin to run this command
```sh
npm deprecate @bbc/<package-name> --message "This package is no longer maintained."
```

## Reversal
If for some reason a package was deprecated by mistake or is reintroduced to Psammead, this process can be reversed.

```sh
npm ...
```

## References
- NPM deprecate docs
