import calc = require('../app/domain/calculator');

var test = {
	"test adding digits": function (test) {
		var ci = new calc.CalculatorInteractor();
		ci.addDigit('9');
		var state = ci.addDigit('0');
		test.strictEqual(state.displayValue, '90');
		test.done();
	}
};

export = test;