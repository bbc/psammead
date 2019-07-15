module.exports = () => ({
  code: input =>
    input.replace(/-styled-mixin\d+:\s.+(?!{|,).$/gm, `/* styled-mixin */`),
});
