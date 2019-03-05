/* eslint-disable max-statements, complexity */
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const fs = require('fs');
const fsActions = require('./src/fs-actions');
const basePackage = require('../package.json');
const questions = require('./src/questions');

const prettyName = (name, join = ' ') =>
  name
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(join);

module.exports = class extends Generator {
  async prompting() {
    const props = await this.prompt(questions);
    this.props = props;
    this.props.prettyName = prettyName(this.props.name);
    this.props.componentName = prettyName(this.props.name, '');
    this.props.dependencies = {
      ...basePackage.dependencies,
      ...basePackage.devDependencies,
    };
  }

  paths() {
    this.log(chalk.blue('Creating your package folder...'));

    const destination = `./packages/components/psammead-${this.props.name}`;
    fsActions.mkDir(destination);
    this.destinationRoot(destination);
    this.sourceRoot(`${__dirname}/templates`);
  }

  writing() {
    this.log(chalk.blue('Generating your package files...'));

    fs.readdir(`${__dirname}/templates`, (err, files) => {
      files.forEach(filename => {
        this.fs.copyTpl(
          this.templatePath(filename),
          this.destinationPath(filename),
          this.props,
        );
      });
    });
  }

  install() {
    this.log(chalk.green('Now installing your package...'));
    
    return fsActions
      .install()
      .then(fsActions.installPackage('@bbc/psammead-test-helpers'));
  }

  end() {
    this.log(chalk.blue('Success!!'));
  }
};
