const processorRemoveMixins = require('./processorRemoveMixins');

it('should comment out styled-components mixins', () => {
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
  
    -styled-mixin1:hover &,
      -styled-mixin4:focus & {
      text-decoration: none;
      border-bottom: $dummyValue solid $dummyValue;
      -styled-mixin1: 0;
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
  
    -styled-mixin1:hover &,
      -styled-mixin4:focus & {
      text-decoration: none;
      border-bottom: $dummyValue solid $dummyValue;
      /* styled-mixin */
    }
  }
  `;

  expect(actual).toEqual(expected);
});
