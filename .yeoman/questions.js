var gitConfig = require('./git-config');

module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you like to call your package? We\'ll automatically namespace it for you.',
        validate: function(answer) {
            return (
                answer &&
                answer.replace(/[^a-z0-9-]/g, '') === answer &&
                answer.replace(/^[0-9]/, '') === answer
            ) ?
                true :
                'Please enter a valid package name - lowercase letters, non-leading numbers and hyphens only please.';
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What\'s the description of the module?',
        validate: function(answer) {
            return answer ? true : 'Please enter a valid module description';
        }
    },
    {
        type: 'input',
        name: 'authorName',
        message: 'Who should be listed as the author?',
        default: gitConfig.getName(),
        validate: function(answer) {
            return answer.length > 3 || 'Please enter a valid name';
        }
    },
    {
        type: 'input',
        name: 'authorEmail',
        message: 'What is the email address of the author?',
        default: gitConfig.getEmail(),
        validate: function(answer) {
            return /\S+@\S+\.\S+/.test(answer) || 'Please enter a valid email address';
        }
    }
]