import { css } from 'styled-components';
import MEDIA_QUERY_TYPOGRAPHY from './breakpoints';

export const T_LONG_PRIMER = css`
  font-size: 0.9375em;
  line-height: 1.125rem;
  ${MEDIA_QUERY_TYPOGRAPHY.laptopAndLarger} {
    font-size: 0.875em;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Body Copy" */
export const T_BODY_COPY = css`
  font-size: 0.9375em;
  line-height: 1.25rem;
  ${MEDIA_QUERY_TYPOGRAPHY.smartPhoneAndLarger} {
    font-size: 1em;
    line-height: 1.375rem;
  }
`;

export const T_BREVIER = css`
  font-size: 0.875em;
  line-height: 1rem;
  ${MEDIA_QUERY_TYPOGRAPHY.smartPhoneOnly} {
    line-height: 1.125rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.laptopAndLarger} {
    font-size: 0.8125em;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Canon" */
export const T_CANON = css`
  font-size: 1.75em;
  line-height: 2rem;
  ${MEDIA_QUERY_TYPOGRAPHY.smartPhoneOnly} {
    font-size: 2em;
    line-height: 2.25rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.laptopAndLarger} {
    font-size: 2.75em;
    line-height: 3rem;
  }
`;

/* Font styling below is a subset of BBC GEL Typography "Trafalgar" */
export const T_TRAFALGAR = css`
  font-size: 1.25em;
  line-height: 1.5rem;
  ${MEDIA_QUERY_TYPOGRAPHY.smartPhoneOnly} {
    font-size: 1.5em;
    line-height: 1.75rem;
  }
  ${MEDIA_QUERY_TYPOGRAPHY.laptopAndLarger} {
    font-size: 2em;
    line-height: 2.25rem;
  }
`;

export const T_MINION = css`
  font-size: 0.75em;
  line-height: 1em;
`;
