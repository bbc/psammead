none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci;

tests:
	npm test;

storybook:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/BBC-News/psammead.git"
	git config user.email "foo@bar.com"
	git config user.name "BBC News CI"
	npm run deploy-storybook;
