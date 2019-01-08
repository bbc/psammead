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
	npm test;

storybook:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/BBC-News/psammead.git"
	# These user config values are needed to avoid error being throw.
	# These arnt used for authentication however, as it uses the provided github token.
	git config user.email "foo@bar.com"
	git config user.name "BBC News CI"
	npm run deploy-storybook;

publish:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	npm run publish;
