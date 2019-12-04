// const axios = require('axios');
// const getPRNumber = require('../getPRNumber/index');

// const authToken = process.env.GITHUB_TOKEN;

// const closePullRequest = async () => {
//   // const response = await axios.patch(
//   //   `https://api.github.com/repos/bbc/psammead/pulls`,
//   //   {
//   //     state: 'closed',
//   //   },
//   //   {
//   //     headers: {
//   //       'content-type': 'application/vnd.github.v3+json',
//   //       Authorization: authToken,
//   //     },
//   //   },
//   // );
//   // const branchName = [];
//   // const branchNumber = [];
//   // const thedata = response.data;
//   // // eslint-disable-next-line no-plusplus
//   // for (let index = 0; index < thedata.length; index++) {
//   //   branchName[index] = thedata[index].head.ref;
//   //   if (branchName[index].includes('dependabot') !== true) {
//   //     delete branchName[index];
//   //   } else {
//   //     branchNumber[index] = thedata[index].number;
//   //   }
//   // }
//   // // eslint-disable-next-line no-plusplus
//   // for (let index = 0; index < branchName.length; index++) {
//   //   console.log(branchNumber[index]);
//   // }
// };

// console.log(closePullRequest());
// module.exports = closePullRequest;
