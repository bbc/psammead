/**
 * Convert the upgradedPackages output to a an object with
 * the upgraded packages as keys
 * @param {*} accumulator - The object
 * @param {*} current -  Current output line
 */

const outputReducer = (accumulator, current) => {
  const sections = current.split(': ');
  if (sections.length) {
    const key = sections[0];
    const value = sections.splice(1).join(': ');
    if (Object.prototype.hasOwnProperty.call(accumulator, key)) {
      accumulator[key] += value;
    } else {
      accumulator[key] = value;
    }
  }
  return accumulator;
};

module.exports = output => {
  const parsedOutput = [...new Set(output.split('\n'))].reduce(
    outputReducer,
    {},
  );
  const cleanedOutput = {};
  Object.keys(parsedOutput).forEach(key => {
    if (key) {
      const cleanedValue = parsedOutput[key].split('{');
      cleanedValue.splice(0, 1, '{');
      try {
        const cleanedJson = JSON.parse(cleanedValue.join(''));
        if (Object.keys(cleanedJson).length) {
          cleanedOutput[key] = cleanedJson;
        }
        // eslint-disable-next-line no-empty
      } catch {}
    }
  });
  return cleanedOutput;
};
