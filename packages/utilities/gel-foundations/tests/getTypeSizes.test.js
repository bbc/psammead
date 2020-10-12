import { MEDIA_QUERY_TYPOGRAPHY } from '../src/breakpoints';
import getTypeSizes from '../src/getTypeSizes';
import { arabic } from '../src/scripts';

describe('getTypeSizes', () => {
  it('Should return the Canon Type Sizes for the arabic script', () => {
    const canonStyles = getTypeSizes('canon', arabic);
    const block = `
    font-size: 2rem;
    line-height: 2.625rem;

    ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_ONLY} {
      font-size: 2.375rem;
      line-height: 2.875rem;
    }

    ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
      font-size: 2.75rem;
      line-height: 3.375rem;
    }
  `;

    expect(block).toEqual(canonStyles);
  });
});
