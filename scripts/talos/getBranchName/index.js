const getDate = () => {
  const today = new Date();
  const date = `${today.getFullYear()}${
    today.getMonth() + 1
  }${today.getDate()}`;
  const time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  return date + time;
};

const getBranchName = () => `Talos/${getDate()}`;

module.exports = getBranchName;
