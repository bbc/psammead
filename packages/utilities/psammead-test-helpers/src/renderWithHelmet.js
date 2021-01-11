import { render, waitFor } from '@testing-library/react';

export default component => {
  /*
   * Similar to this problem https://github.com/testing-library/react-testing-library/issues/402
   * This helper was created to solve the problem of rendering helmet/head contents in snapshots.
   * Pass in a component that uses helmet somewhere in the component tree.
   * The full html tree is returned which you can then use to snapshot helmet/head contents.
   */

  const { container } = render(component);
  const noop = () => {};
  const ARBITRARY_TIMEOUT = 100; // seems long enough for any dom mutations to occur
  const headElement = document.querySelector('head');

  headElement.innerHTML = ''; // clear out head mutations from previous tests

  return waitFor({
    container: headElement,
    timeout: ARBITRARY_TIMEOUT,
  })
    .catch(noop) // handle a waitFor timeout
    .then(mutationsList => {
      const headMutationDetected = mutationsList && mutationsList.length;

      if (headMutationDetected) {
        // helmet was probably used so we should get the full html

        const htmlElement = document.querySelector('html');

        const helmetElements = document.querySelectorAll(
          '[data-react-helmet="true"]',
        );

        const removeHelmetAttributes = el =>
          el.removeAttribute('data-react-helmet'); // remove react-helmet attribute noise from elements

        removeHelmetAttributes(htmlElement); // remove react-helmet attribute noise from elements

        Array.from(helmetElements).forEach(removeHelmetAttributes);

        return { container: document.querySelector('html') };
      }

      return { container };
    });
};
