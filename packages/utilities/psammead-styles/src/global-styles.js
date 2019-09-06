/* eslint-disable no-unused-expressions */
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${styledNormalize}

    /* Box Sizing https://bit.ly/1A91I0J */
    html {
      box-sizing: border-box;
      font-size: 100%;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;

export default GlobalStyles;
