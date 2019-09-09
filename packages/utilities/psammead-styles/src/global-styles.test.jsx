import React from 'react';
import { render } from '@testing-library/react/pure';
import GlobalStyles from './global-styles';

const createGlobalStyles = () => {
  render(<GlobalStyles />);
};

const getGlobalStyles = () => {
  const rules = document.styleSheets[0].cssRules;
  return rules.reduce((cssRules, cssRule) => cssRules + cssRule.cssText, '');
};

describe('global-styles', () => {
  it('should inject normalize to global styles', () => {
    createGlobalStyles();
    const styles = getGlobalStyles();
    expect(styles).toMatchSnapshot();
  });

  it('should handle global-styles with fonts props', () => {
    // eslint-disable-next-line no-unused-expressions
    <GlobalStyles fonts={['font-family: "Sans-Serif"']} />;
    const styles = getGlobalStyles();
    expect(styles).toMatchSnapshot();
  });
});
