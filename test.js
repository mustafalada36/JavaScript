// var x = 10;

// if ( (null) || (console.log("Hello")) || x > 5  ) {
//   console.log("Hello");
// }

// let a=10;
// console.log(a++);

// var sum=0;
// let a=10;
// for (a; a < 20; a++) {
//   sum =sum +a;
//     // console.log(a);
 
// }
// console.log("\nThe Sum is:" +sum);

// var x = 5;
// var y = x;
// x = 10;
// console.log("Before " +y);

// var y=x;
// console.log("After" +y)

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();
