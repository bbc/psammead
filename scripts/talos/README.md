# Talos

## Description

Talos is a bumper bot that runs automatically for Psammead packages.

## Manual Usage

### Using Jenkins

Navigate to [Jenkins](https://ci.news.tools.bbc.co.uk/blue/organizations/jenkins/psammead/branches) and click on the play (run) button, then enter the list of packages you want to bump seperated by commas.

![invoke-talos-jenkins](https://user-images.githubusercontent.com/34196381/63758525-d03ef980-c8b3-11e9-9b8c-d4f9a451237b.png)

### Using CLI (not recommended) 

    npm run talos "[insert package names with @bbc/]"

## How to review PRs?

PRs can be reviewed like any other PR. The PRs should be tested according to what is being bumped.

## When a Talos PR gets conflicts how can I rebase/recreate it?

Manually invoking Talos and entering the packages you want to bump can resolve conflicts.

## Does Talos auto-update itself with the latest branch?

Talos only runs on latest therefore does not need to.

## Does Talos handle the package bumping and changelog?

Yes. When you make a Psammead package change you publish a new version of it.

When these changes are published, Talos will find where the packages are used across Psammead and will bump them, increasing the version number, then writes a changelog, makes a branch and creates a pull request.

Developers and testers need to review, test and merge the PR.

## How does Talos treat Release Candidate, alpha, beta and v0.X package versions?

They are ignored by Talos as it only runs on latest.

## When Psammead is up to date how do I pull changes through to Simorgh?

The package versions need to be manually updated in Simorgh, then run ``npm install`` in your CLI.

## I don't see why I wouldn't want to try to update everything, how do I invoke it with \*/ALL packages being updated?

You would only want to bump packages for components that you have actually changed. This is to reduce the complexity of the PRs generated, allows reviewers to focus on components changed and speeds up testing.

## Who is Talos?

In Greek mythology, Talos, also spelled Talus, was a giant automaton made of bronze to protect Europa in Crete from pirates and invaders. <img align="right" width="200" height="200" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Didrachm_Phaistos_obverse_CdM.jpg">