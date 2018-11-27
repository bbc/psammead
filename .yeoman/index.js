/* eslint-disable max-statements, complexity */
const Generator = require('yeoman-generator');
const fsActions = require('./src/fs-actions');
const chalk = require('chalk');
const fs = require('fs');

function prettyName(name) {
    return name.split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

module.exports = class extends Generator {
    async prompting() {
        const props = await this.prompt(require('./src/questions'));
        this.props = props;
        this.props.prettyName = prettyName(this.props.name);
    }

    paths() {
        this.log(chalk.blue('Creating your package folder...'));

        var destination = './packages/components/' + this.props.name;
        fsActions.mkDir(destination);
        this.destinationRoot(destination);
        this.sourceRoot(__dirname + '/templates');
    }

    writing() {
        this.log(chalk.blue('Generating your package files...'));

        fs.readdir(__dirname + '/templates', (err, files) => {
          files.forEach(filename => {
            this.fs.copyTpl(
               this.templatePath(filename),
               this.destinationPath(filename),
               this.props
            );
          });
        })
    }

    install() {
        this.log(chalk.green('Now installing your package...'));
        return fsActions.install();
    }

    end() {
        this.log(chalk.blue('Success!!'));
    }
}
