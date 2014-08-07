all: build-app

tests: build-tests run-tests

build-tests:
	tsc --module commonjs --outDir build/ test/test-*.ts

run-tests:
	nodeunit build/test/test-*.js

build-app:
	tsc --module commonjs --outDir build/ app/main.ts

server: build-app
	node build/app/view/server/main.js