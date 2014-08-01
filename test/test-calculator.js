var CalculatorInteractor = require('../domain/calculator').CalculatorInteractor;

module.exports = {
	"test adding digits": function (test) {
		var calc = new CalculatorInteractor();
		calc.addDigit('9');
		var state = calc.addDigit('0');
		test.strictEqual(state.displayValue, '90');
		test.done();
	}
};