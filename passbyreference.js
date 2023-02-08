//Objects can be passed by References

var a ={
	name:10
};
var b =a;
console.log(a);
console.log(b);

b.name = 5;
console.log("After:")
console.log(a);
console.log(b);


// console.log("\n INTO FUNCTIONS");
// //in Function Pass by value
// function multiply(multi) {
// 	console.log(multi);
// 	multi=8;
// 	console.log(multi);

// }
// 	var value = 2;
// 	multiply(value);
// 	console.log(value);