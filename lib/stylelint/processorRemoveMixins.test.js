const processorRemoveMixins = require('./processorRemoveMixins');

it('should comment out styled-components mixin styles', () => {
  const input = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    -styled-mixin1: dummyValue;
    -styled-mixin2: dummyValue;
    padding: 0;
  }
  `;
  const actual = processorRemoveMixins().code(input);
  const expected = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    /* styled-mixin */
    /* styled-mixin */
    padding: 0;
  }
  `;

  expect(actual).toEqual(expected);
});

it('should comment out styled-components mixins styles in media queries', () => {
  const input = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    -styled-mixin1: dummyValue;
    -styled-mixin2: dummyValue;
    padding: 0;
  
    @media (min-width: $dummyValue) {
      margin: $dummyValue 0 0 0;
      -styled-mixin3: dummyValue;
    }
  }
  `;
  const actual = processorRemoveMixins().code(input);
  const expected = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    /* styled-mixin */
    /* styled-mixin */
    padding: 0;
  
    @media (min-width: $dummyValue) {
      margin: $dummyValue 0 0 0;
      /* styled-mixin */
    }
  }
  `;

  expect(actual).toEqual(expected);
});

it('should comment out styled-components mixins styles without semi-colons', () => {
  const input = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    -styled-mixin1: dummyValue;
    -styled-mixin2: dummyValue;
    -styled-mixin3: dummyValue
    padding: 0;
    -styled-mixin4: dummyValue
  }
  `;
  const actual = processorRemoveMixins().code(input);
  const expected = `
  .selector78 {
    list-style-type: none;
    margin: $dummyValue 0 0 0;
    /* styled-mixin */
    /* styled-mixin */
    /* styled-mixin */
    padding: 0;
    /* styled-mixin */
  }
  `;

  expect(actual).toEqual(expected);
});

it('should not comment out styled-components mixins selectors', () => {
  const input = `
  -styled-mixin1:hover &,
  -styled-mixin4:focus & {
    -styled-mixin5: dummyValue
    text-decoration: none;
    border-bottom: $dummyValue solid $dummyValue;
    -styled-mixin1: 0;
  }
  `;
  const actual = processorRemoveMixins().code(input);
  const expected = `
  -styled-mixin1:hover &,
  -styled-mixin4:focus & {
    /* styled-mixin */
    text-decoration: none;
    border-bottom: $dummyValue solid $dummyValue;
    /* styled-mixin */
  }
  `;

  expect(actual).toEqual(expected);
});
