//Using the loop from question 5 above, only log the counter variable if it is an even number.

//Hint:
//You can use the modulus % operator for this.
for (var i = 15; i <= 25; i += 1) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//Question 2
//Create a function that logs the sentence "I am a function".
//Assign this function to a variable called innerFunction.
//Create another function called outerFunction that acceptsone argument.
//Inside outerFunction, call the argument like you would a function - with parenthesis ().
//Call outerFunction and pass in the innerFunction variable.

function createSentence() {
	console.log('I am a function');
}
var innerFunction = createSentence;

function outerFunction(oneArgument) {
	oneArgument();
}
outerFunction(innerFunction);
