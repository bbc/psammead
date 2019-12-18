# Things we need to do when creating a new component! ✍️

## Before you begin:

- Are there finalised designs for this component? Confirm that the designs are all up to date before starting. If not - is there a plan for a prototyping session between a UX designer and a developer?
- Have the designs been through an accessibility review and approved?
- Are there agreed requirements and acceptance criteria for this component? These requirements may have come from different places - Jira/Zeplin/Docs/Dropbox… - make sure they are all captured in the GitHub Issues that are created for this component.
- Does this new component require any translations? If so, ask for these upfront. It may not block the work from starting, but it could take a while for them all to be sourced. It may also be ok to go live with a subset of translations, depending on which services are going to be using this component.
- Does the component require any event tracking? This should be covered by the requirements.
- If this is a brand new component, or a major change to an existing component, it’s probably worth setting up a swarm to discuss requirements upfront, and begin tackling the work together. This swarm should initially discuss:
  - What tests need to be written for this component? What can be handled in unit tests? What is likely to need either a new E2E or to change an existing one? Involve a tester in these conversations.
  - How can this component be built in a way that supports AMP? There are many cases where AMP will need a different implementation to the canonical site, including client-side user interaction, data fetching and images.
  - If you need to pass in extra props from Simorgh into a Psammead component, but don’t use those props in the components itself, you can spread extra props on the component rather than adding them explicitly. Examples of when we do this are for event tracking and adding ids to elements to be targeted when working with AMP events and state. See an example here: https://github.com/bbc/psammead/blob/latest/packages/components/psammead-brand/src/index.jsx#L200
  - How will this component behave if JavaScript is disabled? Core content needs to be accessible with JavaScript disabled - ensure that this component allows for this.
  - As a group, break down the work required into small subtasks, and add these to a checklist in the GitHub issue. If a subtask requires more effort, members of the swarm can either all work together, or pair on the task. Smaller tasks can be picked up individually. Each of these subtasks can go into code review on their own, rather than waiting for all of the work to be done. You may think of new tasks once you’ve started developing, so feel free to keep adding to this list once you’ve started.
  - Make sure that accessibility requirements are considered throughout this process, not just at the end during the accessibility swarm.
  - Some things to consider that are often missed until code review/testing are high contrast mode in firefox, support for right-to-left languages, and IE support.

| Thing to remember                                                             | Stage to do the thing at eg start/end, before design etc |
| ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| Think about e2e tests                                                         | start                                                    |
| Write e2e tests                                                               | end                                                      |
| Think about AMP                                                               | start                                                    |
| Think about non-JS                                                            | start                                                    |
| Involve testers in early discussions of component                             | start                                                    |
| Consider accessibility early on                                               | start                                                    |
| Requirements                                                                  | start                                                    |
| Acceptance criteria                                                           | start                                                    |
| Be clear about where requirements and ACs live - Jira/Zeplin/Docs/Dropbox etc | all the way through                                      |
| Translations requirements short/long term                                     | start                                                    |
| Split high level requirements into subtasks                                   | During dev swarm                                         |
| Confirm that the designs are up to date                                       | start                                                    |
| Does component require event tracking?                                        | start (once event tracking is complete)                  |
| Decide where this should be developed in pair/individually                    | start                                                    |
| Discuss unit test implementation within refinement                            | Refinement                                               |
| Do we extend the swarming approach beyond devs (include design/test too)?     | start                                                    |
| Don't forget IE, `rtl` and high contrast mode in Firefox                      | all the way through                                      |
