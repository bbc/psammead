none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	cd ${APP_DIRECTORY}; npm ci; npm run install:packages;

tests:
	cd ${APP_DIRECTORY}; npm test;

publish:
	cd ${APP_DIRECTORY}; ./.scripts/publish.sh;
