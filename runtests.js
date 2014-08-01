#!/usr/bin/env node
require('typescript-require')({
    nodeLib: false,
    targetES5: true,
    exitOnError: true
});
var reporter = require('nodeunit').reporters.default;
reporter.run(['test/test-calculator.js']);