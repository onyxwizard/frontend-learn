// Arrow Functions
/* Syntax
    let variable = (param1,param2,..) => expression;
*/
console.log("===Arrow Functions===");
let func = (message, name) => message + " my name is: " + name;
console.log(func("Hi!", "Onyx!"));


// if we use "{}" then we need to add return
console.log("===Arrow Functions with curly braces{}===");
let sum = (a, b) => {
	// the curly brace opens a multiline function
	let result = a + b;
	return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum(1, 2)); // 3
