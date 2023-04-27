	
	// let a ;
	//  a =parseFloat(a);
	// console.log("Enter First Integer" +a);
	// let b;
	//  b =parseFloat(b);
	// console.log("Enter Second Integer" +b);
	// const c = a*b;
	
	// console.log("Multiplication is:" +c);
	
	let num1 = prompt("Enter the first number:");
	let num2 = prompt("Enter the second number:");

	// convert the user input to numbers
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	// calculate the multiplication and division
	const product = num1 * num2;
	const quotient = num1 / num2;

	// display the results
	console.log(`The product of ${num1} and ${num2} is ${product}`);
	console.log(`The quotient of ${num1} and ${num2} is ${quotient}`);

	
