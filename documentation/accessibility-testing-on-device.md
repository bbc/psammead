# Accessibility testing on device

## Storybook

If the component is publicly available in Storybook you can preview this on any device. Don't forget to follow the [testing steps](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-testing-with-assistive-technology) and use [supported assistive technology](https://bbc-news.github.io/accessibility-news-and-you/accessibility-and-supported-assistive-technology).

### <a name="open"></a>Open the component in a tab
Storybook publishes components in an iframe within the Storybook UI, this will be acknowledged by assistive technology such as a screen reader, it's therefore recommeded to **view/open the component in another tab** to the Storybook UI, you can then see the component code in isolation without the iframe and Storybook UI.

## Local code in Storybook

If you have a PR with code that is not yet merged and you need to preview this on another device, you can do so in Storybook via tunnelling:

* Install packages ‘npm run install:packages’
* Run storybook ‘npm run storybook’
* Run your tunnellinng tool on the Storybook port
* In Storybook, [open the component in another tab](#open)

### Troubleshooting

If working in a BBC office you may experience difficulties accessing the url, if so selecting one of the following networks may help:

* **BBCNewsApps** (Note this must only be used on testing devices - Available on the 6th floor in NBH)
* **VJ Device Network** (Available in the 4th floor collaboration zone in NBH)
* Alternatively if you are happy to do so, you can connect to your own personal wifi connection

Note, if you are using one of the **Accessibility PC laptops**, and you don't have any internet connection in IE after starting up, load a url in Chrome (this seems to start the 'myConnect IE Proxy Tool' if it hasn't done so on start up), then go back to IE and it should now work.
