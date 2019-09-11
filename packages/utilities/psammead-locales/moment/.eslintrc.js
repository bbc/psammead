module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:es5/no-es2015"
  ],
  plugins: ['es5'],
  rules: {
    // IE11 gives syntax error for trailing commas on functions and Moment
    'comma-dangle': ['error', {
      'functions': 'never',
      'imports': 'only-multiline',
      'objects': 'only-multiline',
      'arrays': 'only-multiline',
    }],
    'func-names': 0,
    'object-shorthand': 0,
    'vars-on-top': 0,
    'no-var': 0,
    'one-var':0,
    'no-block-scoping': 2,
    'no-template-literals': 0,
    'no-nested-ternary':0,
  },
};
