module.exports = {
  rules: {
    // IE11 gives syntax error for trailing commas on functions and Moment
    // locales are not transpiled
    'comma-dangle': ['error', {
      'functions': 'never',
      'imports': 'only-multiline',
      'objects': 'only-multiline',
      'arrays': 'only-multiline',
    }],
    'object-shorthand': 0,
    'no-var': 0,
    'one-var': 0,
    'func-names': 0,
  },
};
