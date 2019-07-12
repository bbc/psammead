module.exports = () => ({
  code: input => {
    const isMixin = line => line.includes('-styled-mixin');
    const transformMixinToCustomProperty = line =>
      isMixin(line)
        ? line.replace(/-styled-mixin.+?$/, '--styled-mixin: $dummyValue;')
        : line;
    const transformed = input
      .split('\n')
      .map(transformMixinToCustomProperty)
      .join('');

    return transformed;
  },
});
