import { boolean, select, text } from '@storybook/addon-knobs';
import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as underTest from './src';

let mockBooleanResult = false;

jest.mock('@storybook/addon-knobs', () => ({
  boolean: jest.fn(() => mockBooleanResult),
  select: jest.fn(() => 'select knob'),
  text: jest.fn(() => 'text knob'),
}));

const textVariantsExpectedExports = {
  LANGUAGE_VARIANTS: 'object',
};

const inputProviderExpectedExports = {
  inputProvider: 'function',
};

const expectedExports = {
  textVariants: textVariantsExpectedExports,
  inputProvider: inputProviderExpectedExports,
};

const actualExports = {
  textVariants: { LANGUAGE_VARIANTS: underTest.LANGUAGE_VARIANTS },
  inputProvider: { inputProvider: underTest.inputProvider },
};

describe('Psammead storybook helpers', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(
      actualExports,
      expectedExports,
      'psammead-storybook-helpers',
    );
  });

  describe('inputProvider', () => {
    let renderFn;
    beforeEach(() => {
      renderFn = jest.fn();

      boolean.mockClear();
      select.mockClear();
      text.mockClear();
    });

    it('calls the render function with no inputs', () => {
      underTest.inputProvider([], renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith();
    });

    describe('using free entry text box', () => {
      beforeAll(() => {
        mockBooleanResult = false;
      });

      it('calls the render function with one input', () => {
        underTest.inputProvider(['first'], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith('text knob');

        expect(boolean).toHaveBeenCalledTimes(1);
        expect(select).toHaveBeenCalledTimes(0);
        expect(text).toHaveBeenCalledTimes(1);
      });

      it('calls the render function with multiple inputs', () => {
        underTest.inputProvider(['first', 'second'], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith('text knob', 'text knob');

        expect(boolean).toHaveBeenCalledTimes(2);
        expect(select).toHaveBeenCalledTimes(0);
        expect(text).toHaveBeenCalledTimes(2);
      });
    });

    describe('using preselected list option', () => {
      beforeAll(() => {
        mockBooleanResult = true;
      });

      it('calls the render function with one input', () => {
        underTest.inputProvider(['first'], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith('select knob');

        expect(boolean).toHaveBeenCalledTimes(1);
        expect(select).toHaveBeenCalledTimes(1);
        expect(text).toHaveBeenCalledTimes(0);
      });

      it('calls the render function with multiple inputs', () => {
        underTest.inputProvider(['first', 'second'], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith('select knob', 'select knob');

        expect(boolean).toHaveBeenCalledTimes(2);
        expect(select).toHaveBeenCalledTimes(2);
        expect(text).toHaveBeenCalledTimes(0);
      });
    });
  });
});
