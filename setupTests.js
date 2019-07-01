
const { error } = console;
const REACT_INVALID_PROPS = 'Invalid prop|Failed prop type';
const REACT_DUPLICATE_KEYS = 'Encountered two children with the same key';
const REACT_ERRORS = [REACT_INVALID_PROPS, REACT_DUPLICATE_KEYS];
const REACT_ERRORS_REGEX = new RegExp(REACT_ERRORS.join('|'), 'gi');

console.error = (message, ...rest) => {
  if (REACT_ERRORS_REGEX.test(message)) {
    throw new Error(message);
  }

  error(message, ...rest);
};