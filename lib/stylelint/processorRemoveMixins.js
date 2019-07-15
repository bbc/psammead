module.exports = () => ({
  code: input =>
    input.replace(/-styled-mixin\d+?:.+?;$/gm, `/* styled-mixin */`),
});
