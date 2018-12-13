none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci;

tests:
	npm test;

storybook:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/BBC-News/psammead.git"
	# These user config values are needed to avoid error being throw.
	# These arnt used for authentication however, as it uses the provided github token.
	git config user.email "foo@bar.com"
	git config user.name "BBC News CI"
	npm run deploy-storybook;
