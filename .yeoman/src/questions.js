const gitConfig = require('./git-config');
const getExistingPackages = require('./get-existing');

module.exports = [
  {
    type: 'input',
    name: 'name',
    message:
      "What would you like to call your package? We'll automatically namespace it for you.",
    validate(answer) {
      if (getExistingPackages().includes(answer)) {
        return 'Sorry! That package name is taken! Please pick anouther.';
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
    default: gitConfig.getName(),
    validate(answer) {
      return answer.length > 3 || 'Please enter a valid name';
    },
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'What is the email address of the author?',
    default: gitConfig.getEmail(),
    validate(answer) {
      return (
        /\S+@\S+\.\S+/.test(answer) || 'Please enter a valid email address'
      );
    },
  },
];
