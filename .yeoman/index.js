/* eslint-disable max-statements, complexity */

var yeoman = require('yeoman-generator');
var fsActions = require('./lib/fs-actions');
var chalk = require('chalk');
var _ = require('lodash');
var Promise = require('bluebird');
var generateScripts = require('./lib/scripts');

function prettyName(name) {
    return JSON.stringify(obj, null, 4).replace(/\}/, '  }');
}

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();
        this.prompt(require('./questions'), function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    paths: function() {
        var destination = './packages/components/   ' + this.props.name;
        fsActions.mkDir(destination);
        this.destinationRoot(destination);
        this.sourceRoot(__dirname + '/templates');
    },

    writing: function() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            this.props
        );
    },

    install: function() {
        this.log(chalk.green('Now running the build script...'));
        return fsActions.install(this.destinationPath('build_scripts/build.sh'));
    },
});