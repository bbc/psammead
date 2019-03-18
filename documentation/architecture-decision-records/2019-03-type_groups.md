# Components to use utility function to get CSS for type groups
## ADR-0002

* Status: proposed
* Deciders:
  * Sareh H
  * Drew M
  * Amy W
  * Marcos G
  * Chris H
  * Chris A
* Date: 2019-03-18

Technical Story:

World Service has a UX requirement that GEL Type Styles (Canon, Long Primer, Double Pica, etc) should allow for mutable values of font size and line height across services. The possible permutations of such values were grouped into eight different 'scripts': arabic, burmese, cjk_thai, hindi_nepali_bengali, latin, mundo, sinhala, and tamil, as shown in the tabs of this spreadsheet https://docs.google.com/spreadsheets/d/1WMY-rlSbekhB4pV3ojMuYoWDC71Qs93CB2wTfDwAsJg/edit#gid=1458344872

Additionally, a ninth script that contains the default values GEL for all type groups is also required.

## Context and Problem Statement

Currently, Psammead uses a hard-coded set of constants that express the Type Sizes for each Type Style as defined by GEL. We need a way to make these type sizes mutable and mappable to different services.

## Decision Drivers

* Type Styles (Canon, Trafalgar, etc) must allow for different values across services
* Mappings for each style must be easily editable and updateable
* A component should be able to fetch the required CSS for a Type Style by invoking its name (Canon, Trafalgar) and its current script (arabic, mundo, etc)

## Considered Options

1. A theming library that applies different CSS styles depending on the service context
[Link](https://github.com/bbc/psammead/issues/332)

2. Utility functions specific to the Type Style that take the script as a parameter and return the relevant CSS [Link](https://github.com/bbc/psammead/issues/332#issuecomment-470638342)

## Decision Outcome

Chosen option: 2. Utility function, as it allows for the most portability of code.

## Pros and Cons of the Options <!-- optional -->

### 1. Theming Library

* Con: adds another dependency to the stack

### 2. Utility functions

* Good: return only the font-size and line-height specific CSS
