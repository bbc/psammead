none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm run ci:packages;

code-coverage-before-build:
	curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter;
	chmod +x ./cc-test-reporter;
	./cc-test-reporter before-build;

code-coverage-after-build:
	./cc-test-reporter after-build -t lcov;

tests:
	npm run build;
	npm test;

setup-git:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/bbc/psammead.git"
	# These user config values are needed to avoid error being throw.
	# These arnt used for authentication however, as it uses the provided github token.
	git config user.email "foo@bar.com"
	git config user.name "BBC News CI"

storybook:
	make setup-git;
	npm run deploy-storybook;

bump-dependants:
	make setup-git
	npm run updateDependants

publish:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	npm run publish;

change-scanner:
	npm run changeScanner;
