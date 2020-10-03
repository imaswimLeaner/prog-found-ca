// Question 1
// Declare and initialise a variable with a string value.

var userName = 'Jonathan';

// Question 2
// Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
	userFullName: 'Jonathan Convento',
	userAge: '35',
};

// Question 3
// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock === true) {
	console.log('Out of Stock');
} else {
	console.log('in Stock');
}

//Question 4
//Create an array of five numbers.
//Loop through the array and console log each value.

var numArray = [11, 12, 13, 14, 15];

for (var x = 0; x <= numArray.length; x++) console.log(numArray[x]);

// or You can i can used forEach Method like this //
var numArray = [111, 112, 113, 114, 115];

numArray.forEach((element) => {
	console.log(element);
});

//Question 5
//Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var i = 15; i <= 25; i += 1) {
	console.log(i);
}

//Question 6
//Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var i = 15; i <= 25; i += 1) {
	if (i === 20) {
		console.log(i);
	}
}

//Question 7
//Create an array of two objects. Each object must have the same three properties (with different values):
//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.

var user = [
	{
		Name: 'Jonathan',
		Age: 35,
		goldMember: true,
	},
	{
		Name: 'Nathalie',
		Age: 8,
		goldMember: false,
	},
];
for (var i = 0; i < user.length; i++) {
	console.log(user[i].Age);
	console.log(user[i].goldMember);
}

//Question 8
//Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
//Inside the function, log the string "I don't like " together with the argument.
//Call the function and pass in a value of your choice.

function whatIDontLike(animals) {
	console.log("I don't like " + animals);
}

whatIDontLike('giraffes');

//Question 9
//Create a function that accepts two arguments.
//Inside the function, subtract the second argument from the first and console log the result.

function subtractNumber(numberOne, numberTwo) {
	var getTotal = numberOne - numberTwo;
	console.log(getTotal);
}

subtractNumber(100, 50);

//Question 10
//Create an empty array.

emptyArray = [];

//Create a function that accepts one argument.
function putNumbers(firstNumber) {
	emptyArray.push(firstNumber);
}

putNumbers(5);
putNumbers(10);
//Inside the function, add the argument to the array.

//Call the function and pass in a value of any type.
