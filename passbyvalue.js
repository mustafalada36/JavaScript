//Primitives can be passed by value

var a =10;
var b =a;
console.log(a);
console.log(b);

var b = 5;
console.log("After:")
console.log(a);
console.log(b);

//in Function Pass by value
function multiply(multi) {
	console.log(multi);
	multi=8;
	console.log(multi);

}
	var value = 2;
	multiply(value);
	console.log(value);