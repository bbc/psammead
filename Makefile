none:
	@ echo Please specify a target

install:
	npm run ci:packages;


setup-git:
	git remote set-url origin "https://${GITHUB_TOKEN}@github.com/bbc/psammead.git"
	git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
	git config user.email "bbc-news-frameworks@users.noreply.github.com"
	git config user.name "BBC News Frameworks"

publish:
	echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
	npm run publish

change-scanner:
	npm run changeScanner;

talos:
	node scripts/talos/cli ${ARGS};
