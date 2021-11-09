const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	let hasThirdValue = false;

	if (num3 !== undefined) {
		hasThirdValue = true;
	}

// this logs the symbol that has been inputted
	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === '+') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result += tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '-') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result -= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === "*") {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result *= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '/') {
		let result = tokens[1];
		for (var i = 2; i < tokens.length; i++) {
			result /= tokens[i];
		}
		console.log(result);
	} else if (mathSymbol === '√' || 'sqrt') {
		console.log(Math.sqrt(num1));
	} else if (mathSymbol === '^') {
		console.log(num1 ** num2);
	} else if(mathSymbol === '%') {
		console.log(num1 % num2);
	}

	// This line closes the connection to the command line interface.
	reader.close()

});