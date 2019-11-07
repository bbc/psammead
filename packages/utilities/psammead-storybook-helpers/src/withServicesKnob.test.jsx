import { render, waitForDomChange } from '@testing-library/react';
import * as knobs from '@storybook/addon-knobs';
import * as scripts from '@bbc/gel-foundations/scripts';
import withServicesKnob from './withServicesKnob';
import LANGUAGE_VARIANTS from './text-variants';

it('should correctly configure the default story book dropdown', () => {
  const storyFn = () => {};
  knobs.select = jest.fn(() => 'news');

  withServicesKnob()(storyFn);

  expect(knobs.select).toHaveBeenCalledWith(
    'Select a service',
    Object.keys(LANGUAGE_VARIANTS),
    'news',
  );
});

it('should correctly configure the custom story book dropdown', () => {
  const storyFn = () => {};
  knobs.select = jest.fn(() => 'arabic');

  withServicesKnob({
    defaultService: 'arabic',
    services: ['news', 'arabic', 'amharic'],
  })(storyFn);

  expect(knobs.select).toHaveBeenCalledWith(
    'Select a service',
    ['news', 'arabic', 'amharic'],
    'arabic',
  );
});

it('should correctly set the default html dir attribute', async () => {
  const storyFn = () => {};
  knobs.select = () => 'news';
  render(withServicesKnob()(storyFn));
  await waitForDomChange();
  const htmlDirAttr = document.querySelector('html').getAttribute('dir');

  expect(htmlDirAttr).toEqual('ltr');
});

it('should correctly set the chosen service html dir attribute', async () => {
  const mockStoryFn = jest.fn();
  knobs.select = () => 'arabic';
  render(withServicesKnob({ service: 'arabic' })(mockStoryFn));
  await waitForDomChange();
  const htmlDirAttr = document.querySelector('html').getAttribute('dir');

  expect(htmlDirAttr).toEqual('rtl');
});

it('should pass the correct props to the story function', () => {
  const mockStoryFn = jest.fn();
  knobs.select = () => 'news';

  withServicesKnob()(mockStoryFn);

  const expected = {
    script: scripts.latin,
    service: 'news',
    text: 'Could a computer ever create better art than a human?',
    dir: 'ltr',
    locale: 'en',
  };

  expect(mockStoryFn).toHaveBeenCalledWith(expected);
});

it('should pass the correct chosen service props to the story function', () => {
  const mockStoryFn = jest.fn();
  knobs.select = () => 'arabic';

  withServicesKnob()(mockStoryFn);

  const expected = {
    script: scripts.arabic,
    service: 'arabic',
    text:
      'المحكمة العليا الأمريكية ذات الأغلبية المحافظة وافقت على احتجاز غير المواطنين لأجل غير مسمى حتى بعد سنوات من خروجهم من السجن',
    dir: 'rtl',
    locale: 'ar',
  };

  expect(mockStoryFn).toHaveBeenCalledWith(expected);
});
