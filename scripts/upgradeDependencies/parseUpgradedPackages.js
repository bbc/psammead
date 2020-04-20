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
    const value = sections.splice(1).join(': ').trim();
    if (Object.prototype.hasOwnProperty.call(accumulator, key)) {
      accumulator[key] = [...accumulator[key], value];
    } else {
      accumulator[key] = [value];
    }
  }
  return accumulator;
};

module.exports = output => {
  return [
    ...new Set(output.split('\n').filter(str => str.includes('→'))),
  ].reduce(outputReducer, {});
};
