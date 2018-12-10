module.exports = () => {
  let otp;
  const args = process.argv.slice(2);

  args.forEach((arg, index) => {
    if (arg.includes('--otp')) {
      otp = arg.includes('=') ? arg.split('=')[1] : args[index + 1];
    }
  });

  return otp ? `--otp=${otp}` : '';
};
