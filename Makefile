none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci;

tests:
	npm test;
