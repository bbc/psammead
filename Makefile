none:
	@ echo Please specify a target

install:
	npm --version; node --version;
	npm ci;
	curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
	chmod +x ./cc-test-reporter
	./cc-test-reporter before-build

tests:
	npm test;
	./cc-test-reporter after-build -t lcov --debug
