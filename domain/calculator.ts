export class CalculatorState {

	public displayValue: string;

	constructor(displayValue: string) {
		this.displayValue = displayValue;
	}

}

export class CalculatorInteractor {

	private leftOperand:number;
	private currentNumber:string;
	private currentOperator:string;

	constructor() {
		this.currentNumber = '';
	}

	addDigit(digit: string): CalculatorState {
		this.currentNumber = this.currentNumber + digit;
		return new CalculatorState(this.currentNumber);
	}

	addOperator(operator: string): CalculatorState {
		this.calculateSubTotal();
		this.currentOperator = operator;
		this.currentNumber = '';

		return new CalculatorState(this.leftOperand + ' ' + this.currentOperator);
	}

	showResult(): CalculatorState {
		this.calculateSubTotal();
		return new CalculatorState(this.leftOperand+'');
	}

	private calculateSubTotal() : void {
		var value = parseInt(this.currentNumber, 10);
		if(this.leftOperand) {
			this.leftOperand = this.calculate(this.leftOperand, this.currentOperator, value);
		}
		else {
			this.leftOperand = value;
		}
	}

	private calculate(left: number, operator: string, right: number) : number {
		switch(operator) {
			case '+': return left + right;
			case '-': return left - right;
			case '/': return left / right;
			case '*': return left * right;
		}
	}
}