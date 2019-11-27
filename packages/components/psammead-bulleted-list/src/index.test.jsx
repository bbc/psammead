import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import BulletedList from './index';

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

describe('PsammeadBulletedList', () => {
  shouldMatchSnapshot(
    `should not use default bullet styling so that screen readers don't read out "bullet"'`,
    <BulletedList {...ltrProps}>
      <li>No bullets</li>
      <li>Mentioned</li>
    </BulletedList>,
  );

  shouldMatchSnapshot(
    'should render correctly from ltr',
    <BulletedList {...ltrProps}>
      <li>First item on the list</li>
      <li>Second item on the list</li>
      <li>Final list item</li>
    </BulletedList>,
  );

  shouldMatchSnapshot(
    'should render correctly from rtl',
    <BulletedList {...rtlProps}>
      <li>العنصر الأول في القائمة</li>
      <li>البند الثاني في القائمة</li>
      <li>عنصر القائمة النهائية</li>
    </BulletedList>,
  );
});
