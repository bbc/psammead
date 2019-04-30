import { select, text } from '@storybook/addon-knobs';
import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as underTest from '.';

jest.mock('@storybook/addon-knobs');

jest.mock('@bbc/gel-foundations/scripts', () => ({
  latin: 'LATIN SCRIPT OBJECT',
  arabic: 'ARABIC SCRIPT OBJECT',
  cyrillic: 'CYRILLIC SCRIPT OBJECT',
}));

const inputProviderExpectedExports = {
  inputProvider: 'function',
};

const textVariantsExpectedExports = {
  LANGUAGE_VARIANTS: 'object',
};

const expectedExports = {
  inputProvider: inputProviderExpectedExports,
  textVariants: textVariantsExpectedExports,
};

const actualExports = {
  inputProvider: { inputProvider: underTest.inputProvider },
  textVariants: { LANGUAGE_VARIANTS: underTest.LANGUAGE_VARIANTS },
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

      select.mockClear();
      text.mockClear();
    });

    it('always calls the render function with a script and direction', () => {
      const english = {
        text: 'Could a computer ever create better art than a human?',
        script: 'latin',
        dir: 'ltr',
      };
      select.mockReturnValueOnce(english);

      underTest.inputProvider([], renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith([], 'LATIN SCRIPT OBJECT', 'ltr');
      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(0);
    });

    it('handles scenario where config is null', () => {
      const english = {
        text: 'Could a computer ever create better art than a human?',
        script: 'latin',
        dir: 'ltr',
      };
      select.mockReturnValueOnce(english);

      underTest.inputProvider(null, renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith([], 'LATIN SCRIPT OBJECT', 'ltr');
      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(0);
    });

    describe('calls the render function with slot default text when displaying english', () => {
      it('for a single slot', () => {
        const english = {
          text: 'Could a computer ever create better art than a human?',
          script: 'latin',
          dir: 'ltr',
        };
        select.mockReturnValueOnce(english);
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider(
          [{ name: 'first', defaultText: 'Sole input' }],
          renderFn,
        )();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith(
          ['Sole input'],
          'LATIN SCRIPT OBJECT',
          'ltr',
        );

        expect(select).toHaveBeenCalledTimes(1);
        expect(text).toHaveBeenCalledTimes(1);
      });

      it('for multiple slots', () => {
        const english = {
          text: 'Could a computer ever create better art than a human?',
          script: 'latin',
          dir: 'ltr',
        };
        select.mockReturnValueOnce(english);
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider(
          [
            { name: 'first', defaultText: 'First input' },
            { name: 'second', defaultText: 'Second input' },
          ],
          renderFn,
        )();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith(
          ['First input', 'Second input'],
          'LATIN SCRIPT OBJECT',
          'ltr',
        );

        expect(select).toHaveBeenCalledTimes(1);
        expect(text).toHaveBeenCalledTimes(2);
      });
    });

    it('displays english snippet when no slot default text provided', () => {
      const english = {
        text: 'Could a computer ever create better art than a human?',
        script: 'latin',
        dir: 'ltr',
      };
      select.mockReturnValueOnce(english);
      text.mockImplementation((_, displayText) => displayText);

      underTest.inputProvider([{ name: 'first' }], renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith(
        ['Could a computer ever create better art than a human?'],
        'LATIN SCRIPT OBJECT',
        'ltr',
      );

      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(1);
    });

    it('defaults to language text for non-english languages', () => {
      const russian = {
        text:
          'Мнение Назарбаева будет иметь приоритетное значение при принятии важных для страны решений, сказал Токаев',
        script: 'cyrillic',
        dir: 'ltr',
      };
      select.mockReturnValueOnce(russian);
      text.mockImplementation((_, displayText) => displayText);

      underTest.inputProvider(
        [{ name: 'first', defaultText: 'Sole input' }],
        renderFn,
      )();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith(
        [
          'Мнение Назарбаева будет иметь приоритетное значение при принятии важных для страны решений, сказал Токаев',
        ],
        'CYRILLIC SCRIPT OBJECT',
        'ltr',
      );
    });

    describe('text direction', () => {
      it('defaults to ltr when not specified', () => {
        const russian = {
          script: 'cyrillic',
        };
        select.mockReturnValueOnce(russian);
        text.mockImplementation((textKnobName, displayText) => displayText);

        underTest.inputProvider([], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith(
          [],
          'CYRILLIC SCRIPT OBJECT',
          'ltr',
        );
      });

      it('returns value when specified', () => {
        const arabic = {
          script: 'arabic',
          dir: 'rtl',
        };
        select.mockReturnValueOnce(arabic);
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider([], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith(
          [],
          'ARABIC SCRIPT OBJECT',
          'rtl',
        );
      });
    });
  });
});
