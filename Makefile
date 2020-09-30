none:
	@ echo Please specify a target

code-coverage-before-build:
	curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter;
	chmod +x ./cc-test-reporter;
	./cc-test-reporter before-build;

code-coverage-after-build:
	./cc-test-reporter after-build -t lcov;

install:
	yarn run ci:packages;
	yarn run build:storybook

test:
	yarn run build;
	yarn test;

test-chromatic:
	npx chromatic test run  --storybook-build-dir=storybook_dist || true

deploy-storybook:
	yarn run deploy-storybook

setup-git:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/bbc/psammead.git"
	git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
	git config user.email "bbc-news-frameworks@users.noreply.github.com"
	git config user.name "BBC News Frameworks"

publish:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	yarn run publish

change-scanner:
	yarn run changeScanner;

talos:
	node scripts/talos/cli ${ARGS};
