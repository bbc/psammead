import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ShallowRenderer from 'react-test-renderer/shallow';

export const shouldMatchSnapshot = (title, component) => {
  it(title, () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const shallowRender = component => {
  const shallowRenderer = new ShallowRenderer();
  shallowRenderer.render(component);
  const result = shallowRenderer.getRenderOutput();

  return result;
};

export const shouldShallowMatchSnapshot = (title, component) => {
  it(title, () => {
    const tree = shallowRender(component);
    expect(tree).toMatchSnapshot();
  });
};

export const isNull = (title, component) => {
  it(title, () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toBeNull();
  });
};

export const testUtilityPackages = (
  acutalExports,
  expectedExports,
  utilityName,
) => {
  let count = 0;
  const utilities = Object.keys(acutalExports);

  utilities.forEach(utility => {
    const actualExportsByName = Object.keys(acutalExports[utility]);

    actualExportsByName.forEach(actualExportName => {
      if (!(actualExportName in expectedExports[utility])) {
        // eslint-disable-next-line no-console
        console.log(
          `No expected export value declared in unit tests for ${utilityName}/${utility}.js - ${actualExportName}`,
        );
      }

      const actualExportValue = acutalExports[utility][actualExportName];
      const expectedExport = expectedExports[utility][actualExportName];
      const typeCheck = typeof actualExportValue === expectedExport; // eslint-disable-line valid-typeof

      expect(typeCheck).toBe(true);
      count += 1;
    });
  });
  console.log(`Tested all ${count} exports from utilities/${utilityName}`); // eslint-disable-line no-console
};
