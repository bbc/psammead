import { css } from 'styled-components';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-constants/breakpoints';

export const GEL_LONG_PRIMER = css`
  font-size: 0.9375em;
  line-height: 1.125rem;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 0.875em;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Body Copy" */
export const GEL_BODY_COPY = css`
  font-size: 0.9375em;
  line-height: 1.25rem;
  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_AND_LARGER} {
    font-size: 1em;
    line-height: 1.375rem;
  }
`;

export const GEL_BREVIER = css`
  font-size: 0.875em;
  line-height: 1rem;
  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    line-height: 1.125rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 0.8125em;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Canon" */
export const GEL_CANON = css`
  font-size: 1.75em;
  line-height: 2rem;
  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 2em;
    line-height: 2.25rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 2.75em;
    line-height: 3rem;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Trafalgar" */
export const GEL_TRAFALGAR = css`
  font-size: 1.25em;
  line-height: 1.5rem;
  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
    font-size: 1.5em;
    line-height: 1.75rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    font-size: 2em;
    line-height: 2.25rem;
  }
`;

export const GEL_MINION = css`
  font-size: 0.75em;
  line-height: 1em;
`;
