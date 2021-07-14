test:
	 npm run test:watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8

install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish

#gendiff:
#	node bin/genDiff.js
.PHONY: test
