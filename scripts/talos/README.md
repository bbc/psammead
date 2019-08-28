# Talos

## Can Talos be manually invoked?

Yes, Talos can be invoked manually.

### Using Jenkins

Navigate to Jenkins and click on the play (run) button, then enter the list of packages you want to bump seperated by commas.

![invoke-talos-jenkins](https://user-images.githubusercontent.com/34196381/63758525-d03ef980-c8b3-11e9-9b8c-d4f9a451237b.png)

### Using CLI (not recommended) 

Run ``npm run talos "[insert package names with @bbc/]"`` in your local CLI.

## How to review PRs?

PRs can be reviewed like any other PR.

## When a Talos PR gets conflicts how can I rebase/recreate it?

## Does it auto-update itself with the latest branch? If not why not do this on a cron? Why only update Talos PRs and not ALL branches every n hours?

## does Talos handle the package bumping and changelog?

Yes. When you make a Psammead component change you publish a new version of it.


## how does it treat Release Candidate, alpha, beta and v0.X package versions?

[]

## when Psammead is up to date how do I pull changes through to Simorgh?

[]

## I don't see why I wouldn't want to try to update everything, how do I invoke it with \*/ALL packages being updated?

[]

## Short origin (i.e name, why we have it?)

In Greek mythology, Talos, also spelled Talus, was a giant automaton made of bronze to protect Europa in Crete from pirates and invaders.




We (dev&test) then need to take this PR, review, test and merge it

