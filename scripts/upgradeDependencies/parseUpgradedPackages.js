module.exports = output => {
  const parsedOutput = output.split('\n').reduce((accumulator, curr) => {
    const sections = curr.split(': ');
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
  }, {});

  const cleanedOutput = {};
  Object.keys(parsedOutput).forEach(key => {
    if (key) {
      const cleanedJson = parsedOutput[key].split('{');
      cleanedJson.splice(0, 1, '{');
      cleanedOutput[key] = cleanedJson.join('');
    }
  });
  return cleanedOutput;
};
