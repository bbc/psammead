import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import NumberedList, { NumberedListItem } from './index';

const ltrProps = {
  dir: 'ltr',
  script: latin,
  service: 'news',
};

const rtlProps = {
  dir: 'rtl',
  script: arabic,
  service: 'arabic',
};

describe('PsammeadNumberedList', () => {
  it('should confirm that the margin-top property is zero', () => {
    const { getByText } = render(
      <NumberedList {...ltrProps}>
        <NumberedListItem>First item on the list</NumberedListItem>
      </NumberedList>,
    );
    const listItemEl = getByText('First item on the list');
    const listEl = listItemEl.parentNode;
    const style = window.getComputedStyle(listEl);
    expect(style.marginTop).toBe('0px');
  });

  shouldMatchSnapshot(
    'should render correctly from ltr',
    <NumberedList {...ltrProps}>
      <NumberedListItem>First item on the list</NumberedListItem>
      <NumberedListItem>Second item on the list</NumberedListItem>
      <NumberedListItem>Final list item</NumberedListItem>
    </NumberedList>,
  );

  shouldMatchSnapshot(
    'should render correctly from rtl',
    <NumberedList {...rtlProps}>
      <NumberedListItem>العنصر الأول في القائمة</NumberedListItem>
      <NumberedListItem>البند الثاني في القائمة</NumberedListItem>
      <NumberedListItem>عنصر القائمة النهائية</NumberedListItem>
    </NumberedList>,
  );
});
