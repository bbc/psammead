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

const decoratorsExpectedExports = {
  dirDecorator: 'function',
};

const expectedExports = {
  inputProvider: inputProviderExpectedExports,
  textVariants: textVariantsExpectedExports,
  decorators: decoratorsExpectedExports,
};

const actualExports = {
  inputProvider: { inputProvider: underTest.inputProvider },
  textVariants: { LANGUAGE_VARIANTS: underTest.LANGUAGE_VARIANTS },
  decorators: { dirDecorator: underTest.dirDecorator },
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
      select.mockReturnValueOnce('news');

      underTest.inputProvider([], renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith({
        dir: 'ltr',
        slotTexts: [],
        script: 'LATIN SCRIPT OBJECT',
        service: 'news',
      });
      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(0);
    });

    it('handles scenario where config is null', () => {
      select.mockReturnValueOnce('news');

      underTest.inputProvider(null, renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith({
        dir: 'ltr',
        slotTexts: [],
        script: 'LATIN SCRIPT OBJECT',
        service: 'news',
      });
      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(0);
    });

    describe('calls the render function with slot default text when displaying news', () => {
      it('for a single slot', () => {
        select.mockReturnValueOnce('news');
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider(
          [{ name: 'first', defaultText: 'Sole input' }],
          renderFn,
        )();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith({
          slotTexts: ['Sole input'],
          script: 'LATIN SCRIPT OBJECT',
          dir: 'ltr',
          service: 'news',
        });

        expect(select).toHaveBeenCalledTimes(1);
        expect(text).toHaveBeenCalledTimes(1);
      });

      it('for multiple slots', () => {
        select.mockReturnValueOnce('news');
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider(
          [
            { name: 'first', defaultText: 'First input' },
            { name: 'second', defaultText: 'Second input' },
          ],
          renderFn,
        )();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith({
          slotTexts: ['First input', 'Second input'],
          script: 'LATIN SCRIPT OBJECT',
          dir: 'ltr',
          service: 'news',
        });

        expect(select).toHaveBeenCalledTimes(1);
        expect(text).toHaveBeenCalledTimes(2);
      });
    });

    it('displays english snippet when no slot default text provided', () => {
      select.mockReturnValueOnce('news');
      text.mockImplementation((_, displayText) => displayText);

      underTest.inputProvider([{ name: 'first' }], renderFn)();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith({
        slotTexts: ['Could a computer ever create better art than a human?'],
        script: 'LATIN SCRIPT OBJECT',
        dir: 'ltr',
        service: 'news',
      });

      expect(select).toHaveBeenCalledTimes(1);
      expect(text).toHaveBeenCalledTimes(1);
    });

    it('defaults to service text for non-news services', () => {
      select.mockReturnValueOnce('russian');
      text.mockImplementation((_, displayText) => displayText);

      underTest.inputProvider(
        [{ name: 'first', defaultText: 'Sole input' }],
        renderFn,
      )();

      expect(renderFn).toHaveBeenCalledTimes(1);
      expect(renderFn).toHaveBeenCalledWith({
        slotTexts: [
          'Мнение Назарбаева будет иметь приоритетное значение при принятии важных для страны решений, сказал Токаев',
        ],
        script: 'CYRILLIC SCRIPT OBJECT',
        dir: 'ltr',
        service: 'russian',
      });
    });

    describe('text direction', () => {
      it('defaults to ltr when not specified', () => {
        select.mockReturnValueOnce('russian');
        text.mockImplementation((textKnobName, displayText) => displayText);

        underTest.inputProvider([], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith({
          slotTexts: [],
          script: 'CYRILLIC SCRIPT OBJECT',
          dir: 'ltr',
          service: 'russian',
        });
      });

      it('returns value when specified', () => {
        select.mockReturnValueOnce('arabic');
        text.mockImplementation((_, displayText) => displayText);

        underTest.inputProvider([], renderFn)();

        expect(renderFn).toHaveBeenCalledTimes(1);
        expect(renderFn).toHaveBeenCalledWith({
          slotTexts: [],
          script: 'ARABIC SCRIPT OBJECT',
          dir: 'rtl',
          service: 'arabic',
        });
      });
    });

    describe('dirDecorator', () => {
      it('calls the story function with dir and script', () => {
        const storyFn = jest.fn();
        select.mockReturnValueOnce('news');

        underTest.dirDecorator(storyFn);

        expect(storyFn).toHaveBeenCalledWith({
          dir: 'ltr',
          script: 'LATIN SCRIPT OBJECT',
          service: 'news',
        });
      });
    });
  });
});
