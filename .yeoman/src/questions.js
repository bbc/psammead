const getExistingPackages = require('./get-existing');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message:
      "What would you like to call your package? We'll automatically namespace it for you.",
    default: 'my-component',
    validate(answer) {
      const existingPackages = getExistingPackages();
      if (
        existingPackages.includes(`psammead-${answer}`) ||
        existingPackages.includes(answer)
      ) {
        return 'Sorry! That package name is taken! Please pick another.';
      }
      if (
        !answer ||
        answer.replace(/[^a-z0-9-]/g, '') !== answer ||
        answer.replace(/^[0-9]/, '') !== answer
      ) {
        return 'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.';
      }

      return true;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: "What's the description of the module?",
    validate(answer) {
      return answer ? true : 'Please enter a valid module description';
    },
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Who should be listed as the author?',
    default: 'Psammead Maintainers',
    validate(answer) {
      return answer.length > 3 || 'Please enter a valid name';
    },
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'What is the email address of the author?',
    default: 'PsammeadMaintainers@bbc.co.uk',
    validate(answer) {
      return (
        /\S+@\S+\.\S+/.test(answer) || 'Please enter a valid email address'
      );
    },
  },
];
