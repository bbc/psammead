var fs = require('fs');
var path = require('path');
var os = require('os');

var gitConfig;

function getGitConfig() {
    if (!gitConfig) {
        const homedir = os.homedir ? os.homedir() : process.env.HOME;

        gitConfig = fs
            .readFileSync(
                path.resolve(homedir + '/.gitconfig'),
                'utf-8'
            )
            .split('\n');
    }

    return gitConfig;
}

function configFilter(key) {
    return function curriedConfigFilter(item) {
        return item.replace(/^\s*([^\s])/, '$1').indexOf(key) === 0;
    };
}

function getConfigValue(key) {
    return getGitConfig()
        .filter(configFilter(key))
        .shift()
        .replace(/^.*\s?=\s?/, '');
}

function getName() {
    return getConfigValue('name');
}

function getEmail() {
    return getConfigValue('email');
}

module.exports = {
    getName: getName,
    getEmail: getEmail
};