module.exports = output => [...new Set(output.match(/^.+?(?=:\s{$)/gm))];
