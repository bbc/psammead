none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci; npm run ci:packages;

tests:
	npm test;
