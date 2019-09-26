import React from 'react';
import { render } from '@testing-library/react/pure';
import {
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
} from '@bbc/psammead-styles/fonts';
import GlobalStyles from './global-styles';

const getGlobalStyles = () => {
  const rules = document.styleSheets[0].cssRules;
  return rules.reduce((cssRules, cssRule) => cssRules + cssRule.cssText, '');
};

describe('global-styles', () => {
  it('should inject normalize to global styles', () => {
    render(<GlobalStyles />);
    const styles = getGlobalStyles();
    expect(styles).toMatchSnapshot();
  });

  it('should handle global-styles with fonts props', () => {
    render(
      <GlobalStyles fonts={[F_REITH_SANS_REGULAR, F_REITH_SERIF_MEDIUM]} />,
    );
    const styles = getGlobalStyles();
    console.log(styles);
    expect(styles).toMatchSnapshot();
  });
});
