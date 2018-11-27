/* eslint-disable max-statements, complexity */

var yeoman = require('yeoman-generator');
var fsActions = require('./lib/fs-actions');
var chalk = require('chalk');
var _ = require('lodash');
var Promise = require('bluebird');
var generateScripts = require('./lib/scripts');

function prettyStringify(obj) {
    return JSON.stringify(obj, null, 4).replace(/\}/, '  }');
}

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();
        this.prompt(require('./lib/questions'), function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    paths: function() {
        fsActions.mkDir(this.props.name);
        this.destinationRoot(this.props.name);
        this.sourceRoot(__dirname + '/templates');
    },

    writing: function() {
        var gruntConfig = require('./lib/grunt-config'),
            deps = require('./lib/dependencies')(this.props);

        // Write package.json
        this.props.dependencies = prettyStringify(deps.dependencies);
        this.props.devDependencies = prettyStringify(deps.devDependencies);
        var scripts = generateScripts(this.props);
        this.props.scripts = prettyStringify(scripts);
        this.props.testCommand = scripts.test ? 'npm test' : 'grunt test';
        this.props.testFramework = scripts['test:jest'] ? 'jest' : 'jasmine';
        this.props.es6 = this.props.es6 || false;
        this.props.babel = this.props.es6 || this.props.templateType === 'view';
        this.props.cypress = this.props['multi-tier-test-kind'] === 'cypress';
        this.props.nvm = this.props.kind !== 'node-10-template';
        this.props.author = prettyStringify({
            name: this.props.authorName,
            email: this.props.authorEmail
        });

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            this.props
        );

        var props = this.props;

        // Write gruntfile
        var tasks = Object
            .keys(deps.devDependencies)
            .filter(function(dep) {
                return dep.indexOf('grunt-') === 0;
            })
            .map(function(taskName) {
                var config = gruntConfig[taskName].config

                if (props.es6 && gruntConfig[taskName]['config-es6']) {
                    config = gruntConfig[taskName]['config-es6'];
                }

                return {
                    name: taskName,
                    config: config,
                    propName: gruntConfig[taskName].propName,
                    alias: gruntConfig[taskName].alias
                };
            });

        var inspect = require('util').inspect;

        tasks.forEach(function(task) {
            this.gruntfile.insertConfig(task.propName, inspect(task.config, { depth: 4 }));
            this.gruntfile.loadNpmTasks(task.name);
        }, this);

        var testTasks = tasks
            .filter(function(task) {
                return task.alias === 'test';
            })
            .map(function(task) {
                return task.propName;
            });

        var buildTasks = tasks
            .filter(function(task) {
                return task.alias === 'build';
            })
            .map(function(task) {
                return task.propName;
            });

        // The pack task should always be run last
        var packIndex = buildTasks.indexOf('pack');

        if (packIndex > -1) {
            buildTasks.splice(packIndex, 1);
            buildTasks.push('pack');
        }

        if (buildTasks.length) {
            this.props.shouldBuild = true;
            this.gruntfile.registerTask('build', buildTasks);
        }

        if (testTasks.length) {
            this.gruntfile.registerTask('test', testTasks);
        }

        // build readme
        if (this.props.es6) {
            this.fs.copyTpl(
                this.templatePath('README.es6.md'),
                this.destinationPath('README.md'),
                {
                    niceName: _.startCase(this.props.name),
                    nospaceName: _.replace(_.startCase(this.props.name), /\s/g, ''),
                    name: this.props.name,
                    description: this.props.description,
                    grandstand: this.props.grandstand || false
                }
            );
        } else if (this.props.templateType === 'view') {
            this.fs.copyTpl(
                this.templatePath('README.node10view.md'),
                this.destinationPath('README.md'),
                {
                    niceName: _.startCase(this.props.name),
                    nospaceName: _.replace(_.startCase(this.props.name), /\s/g, ''),
                    name: this.props.name,
                    description: this.props.description,
                    grandstand: this.props.grandstand || false
                }
            );
        } else if (this.props.templateType === 'data') {
            this.fs.copyTpl(
                this.templatePath('README.node10data.md'),
                this.destinationPath('README.md'),
                {
                    niceName: _.startCase(this.props.name),
                    nospaceName: _.replace(_.startCase(this.props.name), /\s/g, ''),
                    name: this.props.name,
                    description: this.props.description
                }
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'),
                {
                    niceName: _.startCase(this.props.name),
                    nospaceName: _.replace(_.startCase(this.props.name), /\s/g, ''),
                    name: this.props.name,
                    description: this.props.description,
                    grandstand: this.props.grandstand || false
                }
            );
        }

        // build changelog
        this.fs.copyTpl(
            this.templatePath('CHANGELOG.md'),
            this.destinationPath('CHANGELOG.md'),
            {
                niceName: _.startCase(this.props.name),
                name: this.props.name,
                description: this.props.description
            }
        );

        // Write gitignore
        this.fs.copyTpl(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore'),
            {
                es6: this.props.es6,
                view: this.props.templateType === 'view'
            }
        );

        // Write eslint
        if (this.props['code-linting-type'] === 'eslint') {
            var eslintrc = this.props.es6 ? 'eslintrc-es6' : 'eslintrc';

            this.fs.copy(
                this.templatePath(eslintrc),
                this.destinationPath('.eslintrc')
            );

            this.fs.copy(
                this.templatePath('eslintignore'),
                this.destinationPath('.eslintignore')
            );
        }

        if (this.props['code-linting-type'] === 'eslint-airbnb') {
            this.fs.copyTpl(
                this.templatePath('eslintrc-airbnb'),
                this.destinationPath('.eslintrc'),
                this.props
            );

            this.fs.copy(
                this.templatePath('eslintignore'),
                this.destinationPath('.eslintignore')
            );
        }

        var buildTemplateProps = {
            shouldBuild: this.props.shouldBuild,
            shouldBower: (this.props.grandstand && this.props.sass) || false,
            nvm: this.props.nvm
        };

        if (this.props.kind === 'node-10-template' ||
            this.props['code-linting-type'] === 'eslint-airbnb' ||
            this.props['unit-test-kind'] === 'jest' ||
            this.props['unit-test-kind'] === 'jest+enzyme'
        ) {
            this.fs.copyTpl(
                this.templatePath('build_scripts/build-latest-node.sh'),
                this.destinationPath('build_scripts/build.sh'),
                buildTemplateProps
            );

            this.fs.copyTpl(
                this.templatePath('build_scripts/test-latest-node.sh'),
                this.destinationPath('build_scripts/test.sh'),
                this.props
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('build_scripts/build.sh'),
                this.destinationPath('build_scripts/build.sh'),
                buildTemplateProps
            );

            this.fs.copy(
                this.templatePath('build_scripts/test.sh'),
                this.destinationPath('build_scripts/test.sh')
            );
        }

        if (this.props['code-linting-type'] === 'jshint') {
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
        }

        // Copy files based off question answers
        switch (this.props.kind) {
            case 'isomorphic-react':
                if (this.props.es6) {
                    this.fs.copyTpl(
                        this.templatePath('index.es6.jsx'),
                        this.destinationPath(this.es6Path('index.jsx')),
                        this.props
                    );
                } else {
                    this.fs.copyTpl(
                        this.templatePath('index.jsx'),
                        this.destinationPath(this.es6Path('index.jsx')),
                        this.props
                    );
                }
                break;
            case 'shared-lib':
            case 'isomorphic-shared-lib':
                this.fs.copy(
                    this.templatePath('index-shared-lib.js'),
                    this.destinationPath(this.es6Path('index.js'))
                );
                break;
            case 'template':
                this.fs.copy(
                    this.templatePath('index-template.js'),
                    this.destinationPath(this.es6Path('index.js'))
                );
                break;
            case 'node-10-template':
                if (this.props.templateType === 'view') {
                    this.fs.copyTpl(
                        this.templatePath('index-node10.jsx'),
                        this.destinationPath(this.es6Path('src/index.jsx')),
                        this.props
                    );

                    this.fs.copy(
                        this.templatePath('babelrc-modern'),
                        this.destinationPath('.babelrc')
                    );
                } else {
                    this.fs.copyTpl(
                        this.templatePath('index-node10.js'),
                        this.destinationPath(this.es6Path('lib/index.js')),
                        this.props
                    );
                }

                this.fs.copyTpl(
                    this.templatePath('index.stub.js'),
                    this.destinationPath('index.js'),
                    this.props
                );

                break;
        }

        if (this.props.es6) {
            var template = this.props.kind === 'isomorphic-react' ? 'babelrc-react' : 'babelrc';

            this.fs.copy(
                this.templatePath('index.es6.js'),
                this.destinationPath('index.js')
            );

            this.fs.copy(
                this.templatePath(template),
                this.destinationPath('.babelrc')
            );
        }

        if (this.props.sass) {
            this.fs.copyTpl(
                this.templatePath('sass/_main.scss'),
                this.destinationPath('sass/_main.scss'),
                {
                    moduleName: _.upperCase(_.startCase(this.props.name)),
                    grandstand: this.props.grandstand || false
                }
            );

            this.fs.copy(
                this.templatePath('sass/core.scss'),
                this.destinationPath('sass/core.scss')
            );

            this.fs.copy(
                this.templatePath('sass/enhanced.scss'),
                this.destinationPath('sass/enhanced.scss')
            );

            this.fs.copy(
                this.templatePath('sass/fixed.scss'),
                this.destinationPath('sass/fixed.scss')
            );
        }

        if (this.props.grandstand && this.props.sass) {
            this.fs.copyTpl(
                this.templatePath('bower.json'),
                this.destinationPath('bower.json'),
                {
                    name: this.props.name,
                    description: this.props.description
                }
            );
        }

        if (this.props.postcss) {
            this.fs.copy(
                this.templatePath('postcss.config.js'),
                this.destinationPath('postcss.config.js')
            );
        }

        if (this.props['unit-test-kind'] === 'jasmine') {
            if (this.props.kind === 'isomorphic-react') {
                this.fs.copy(
                    this.templatePath('test/unit/index-isomorphic-react-spec.js'),
                    this.destinationPath('test/unit/index-spec.js')
                );
            } else if (this.props.kind === 'shared-lib' || this.props.kind === 'isomorphic-shared-lib') {
                this.fs.copy(
                    this.templatePath('test/unit/index-shared-lib-spec.js'),
                    this.destinationPath('test/unit/index-spec.js')
                );
            } else {
                this.fs.copy(
                    this.templatePath('test/unit/index-template-spec.js'),
                    this.destinationPath('test/unit/index-spec.js')
                );
            }
        } else if (this.props['unit-test-kind'] === 'karma') {
            if (this.props.kind === 'isomorphic-react') {
                var specFile = this.props.es6 ? 'index-isomorphic-react-spec.es6.js' : 'index-isomorphic-react-spec.js';

                this.fs.copy(
                    this.templatePath('test/unit-karma/' + specFile),
                    this.destinationPath('test/unit/index-spec.js')
                );
            } else if (this.props.kind === 'shared-lib' || this.props.kind === 'isomorphic-shared-lib') {
                this.fs.copy(
                    this.templatePath('test/unit-karma/index-shared-lib-spec.js'),
                    this.destinationPath('test/unit/index-spec.js')
                );
            } else {
                this.fs.copy(
                    this.templatePath('test/unit-karma/index-template-spec.js'),
                    this.destinationPath('test/unit/index-spec.js')
                );
            }

            this.fs.copyTpl(
                this.templatePath('test/unit-karma/karma.conf.js'),
                this.destinationPath('test/unit/karma.conf.js'),
                this.props
            );
        } else if (this.props['unit-test-kind'] === 'jest+enzyme') {
            this.fs.copy(
                this.templatePath('jest-enzyme.config.js'),
                this.destinationPath('jest.config.js')
            );

            this.fs.copy(
                this.templatePath('test/setup.js'),
                this.destinationPath('test/setup.js')
            );

            this.fs.copy(
                this.templatePath('test/unit/jest-enzyme-spec.js'),
                this.destinationPath('test/unit/example.spec.js')
            );
        } else if (this.props['unit-test-kind'] === 'jest') {
            this.fs.copy(
                this.templatePath('jest.config.js'),
                this.destinationPath('jest.config.js')
            );

            this.fs.copy(
                this.templatePath('test/unit/jest-spec.js'),
                this.destinationPath('test/unit/example.spec.js')
            );
        }

        if (this.props['multi-tier-test-kind'] === 'cucumber') {
            if (this.props.kind === 'shared-lib' || this.props.kind === 'isomorphic-shared-lib') {
                this.log(chalk.yellow('No Cucumber support will be added, as you said you were making a shared library, and shared libraries are not directly callable over HTTP'));
            } else if (
                this.props.kind === 'template' ||
                this.props.kind === 'node-10-template' && this.props.templateType === 'data'
            ) {
                this.fs.copyTpl(
                    this.templatePath('test/multi-tier/index.feature'),
                    this.destinationPath('test/multi-tier/index.feature'),
                    { name: this.props.name, kind: this.props.kind }
                );

                this.fs.copy(
                    this.templatePath('test/multi-tier/steps.js'),
                    this.destinationPath('test/multi-tier/steps.js')
                );
            } else {
                this.fs.copyTpl(
                    this.templatePath('test/multi-tier-isomorphic-react/index.feature'),
                    this.destinationPath('test/multi-tier/index.feature'),
                    { name: this.props.name }
                );

                this.fs.copy(
                    this.templatePath('test/multi-tier-isomorphic-react/steps.js'),
                    this.destinationPath('test/multi-tier/steps.js')
                );
            }
        } else if (this.props['multi-tier-test-kind'] === 'cypress') {
            this.fs.copy(
                this.templatePath('test/cypress.json'),
                this.destinationPath('test/cypress.json')
            );

            this.fs.copy(
                this.templatePath('test/cypress/support/index.js'),
                this.destinationPath('test/cypress/support/index.js')
            );

            this.fs.copyTpl(
                this.templatePath('test/cypress/integration/example.spec.js'),
                this.destinationPath('test/cypress/integration/example.spec.js'),
                { name: this.props.name, kind: this.props.kind }
            );
        }
    },

    install: function() {
        this.log(chalk.green('Now running the build script...'));
        return fsActions.install(this.destinationPath('build_scripts/build.sh'));
    },

    es6Path: function(path) {
        var basePath = this.props.es6 ? 'src/' : '';

        return basePath + path;
    }
});