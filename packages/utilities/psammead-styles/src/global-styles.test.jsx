import React from 'react';
import { render } from '@testing-library/react';
import {
  F_REITH_SANS_REGULAR,
  F_REITH_SERIF_MEDIUM,
  F_REITH_SANS_CONDENSED_BOLD,
  F_NASSIM_ARABIC_REGULAR,
  F_NASSIM_PASHTO_BOLD,
  F_NASSIM_PERSIAN_REGULAR,
  F_NASSIM_URDU_BOLD,
  F_ISKOOLA_POTA_BBC_REGULAR,
  F_LATHA_REGULAR,
  F_MALLANNA_REGULAR,
  F_NOTO_SANS_ETHIOPIC_REGULAR,
  F_PADAUK_BOLD,
  F_SHONAR_BANGLA_REGULAR,
} from '@bbc/psammead-styles/fonts';
import GlobalStyles from './global-styles';

/**
 * 15/10/20
 * Revisit snapshot mechanism following Emotion migration.
 */

describe('global-styles', () => {
  it('should inject normalize to global styles', () => {
    render(<GlobalStyles />);
    expect(document.head).toMatchSnapshot();
  });

  it('should handle global-styles with fonts props', () => {
    render(
      <GlobalStyles
        fonts={[
          F_REITH_SANS_REGULAR(),
          F_REITH_SERIF_MEDIUM(),
          F_REITH_SANS_CONDENSED_BOLD(),
          F_NASSIM_ARABIC_REGULAR(),
          F_NASSIM_PASHTO_BOLD(),
          F_NASSIM_PERSIAN_REGULAR(),
          F_NASSIM_URDU_BOLD(),
          F_ISKOOLA_POTA_BBC_REGULAR(),
          F_LATHA_REGULAR(),
          F_MALLANNA_REGULAR(),
          F_NOTO_SANS_ETHIOPIC_REGULAR(),
          F_PADAUK_BOLD(),
          F_SHONAR_BANGLA_REGULAR(),
        ]}
      />,
    );
    expect(document.head).toMatchSnapshot();
  });
});
