import { render, waitForDomChange } from '@testing-library/react';
import 'jest-styled-components';
import deepClone from 'ramda/src/clone';

const renderWithHelmet = async component => {
  /*
 * Similar to this problem https://github.com/testing-library/react-testing-library/issues/402
 * This helper was created to solve the problem of rendering helmet/head contents in snapshots.
 * Pass in a component that uses helmet somewhere in the component tree.
 * The full html tree is rendered and returned which you can then use to snapshot helmet/head contents.
 * Example of use in a test file:
 it('should render correctly', async () => {
    const html = await renderHelmet(<SomeComponent {...someProps} />);
    expect(html).toMatchSnapshot();
  });
 */

  const { container } = render(component);
  const noop = () => {};
  const ARBITRARY_TIMEOUT = 100; // seems long enough for any dom mutations to occur

  return waitForDomChange({
    container: document.querySelector('head'),
    timeout: ARBITRARY_TIMEOUT,
  })
    .catch(noop) // handle a waitForDomChange timeout
    .then(mutationsList => {
      const domMutationDetected = mutationsList && mutationsList.length;

      if (domMutationDetected) {
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

export const shouldMatchSnapshot = (title, component) => {
  it(title, async () => {
    // select the first child to remove the pointless wrapping div from snapshots
    const removeWrappingDiv = container => container.firstChild;
    const { container } = await renderWithHelmet(component);
    const hasOneChild = container.children.length === 1;
    /*
     * if the container has more than one child then it's a component that uses a
     * fragment at the top level so we should not select the first child because it
     * wouldn't snapshot the whole component
     */
    expect(
      hasOneChild ? removeWrappingDiv(container) : container,
    ).toMatchSnapshot();
  });
};

export const isNull = (title, component) => {
  it(title, () => {
    const { container } = render(component);
    expect(container.firstChild).toBeNull();
  });
};

export const setWindowValue = (key, value) => {
  const windowValue = window[key];
  delete window[key];

  let newValue = value;

  if (value && typeof value === 'object') {
    newValue = {
      ...deepClone(windowValue),
      ...value,
    };
  }

  Object.defineProperty(window, key, {
    value: newValue,
    writable: true,
  });
};

export const resetWindowValue = (key, value) => {
  Object.defineProperty(window, key, {
    value,
    writable: true,
  });
};

export const suppressPropWarnings = warnings => {
  const { expectedWarnings } = window;
  if (expectedWarnings && Array.isArray(expectedWarnings)) {
    window.expectedWarnings = [...expectedWarnings, warnings];
  } else {
    window.expectedWarnings = [warnings];
  }
};

const errorIfMissingKey = (keys, object, message) => {
  keys.forEach(key => {
    if (!(key in object)) {
      throw new Error(`Missing value '${key}' in ${message}.`);
    }
  });
};

const checkKeysExistInBothObjects = (object1, object2, message1, message2) => {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  errorIfMissingKey(object1Keys, object2, message2);
  errorIfMissingKey(object2Keys, object1, message1);
};

const checkTypesOfExports = (
  actualExportsByName,
  actualExports,
  expectedExports,
  utilityName,
) => {
  actualExportsByName.forEach(actualExportName => {
    const actualExportValue = actualExports[utilityName][actualExportName];
    const expectedExport = expectedExports[utilityName][actualExportName];
    const typeCheck = typeof actualExportValue === expectedExport; // eslint-disable-line valid-typeof

    // if this fails it is likely that an export is missing from the unit test expectation
    expect(typeCheck).toBe(true);
  });
};

export const testUtilityPackages = (
  actualExports,
  expectedExports,
  packageName,
) => {
  const actualUtilities = Object.keys(actualExports);

  // check if the actual exported file has defined expected values to match and that the expected values are actually exported
  checkKeysExistInBothObjects(
    actualExports,
    expectedExports,
    `the actual utilities for '${packageName}'`,
    `the expected utilities for '${packageName}'`,
  );

  actualUtilities.forEach(utilityName => {
    const actualExportsByName = Object.keys(actualExports[utilityName]);

    // check if each of the actual exported consts have an expected value to match and that the expected values are actually exported
    checkKeysExistInBothObjects(
      actualExports[utilityName],
      expectedExports[utilityName],
      `the actual export for '${packageName}/${utilityName}'`,
      `the expected export for '${packageName}/${utilityName}'`,
    );

    checkTypesOfExports(
      actualExportsByName,
      actualExports,
      expectedExports,
      utilityName,
    );
  });
};
