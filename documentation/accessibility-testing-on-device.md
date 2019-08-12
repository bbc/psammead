# Accessibility testing on device

## Storybook

If the component is publicly available in Storybook you can preview this on any device. Don't forget to follow the [testing steps](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-testing-with-assistive-technology) and use [supported assistive technology](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology).

### Open the component in a tab
Storybook publishes components in an iframe within the Storybook UI, this will be acknowledged by assistive technology such as a screen reader, it's therefore recommeded to **view/open the component in another tab** to the Storybook UI, you can then see the component code in isolation without the iframe and Storybook UI.

## Local code in Storybook

If you have a PR that is not yet merged and you need to preview this on another device, you can do so in Storybook via tunnelling:

* Install packages ‘npm run install:packages’
* Run storybook ‘npm run storybook’
* Run your tunnelling tool on the Storybook port
* In Storybook [open the component in another tab](#open-the-component-in-a-tab)
