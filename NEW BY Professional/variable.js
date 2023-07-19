var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ",petDog);
console.log("My pet cat's name is: ",petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog,"dogSound");
console.log(petCat,"catSound");
var catSound = "meow";
console.log(petCat,"now says"  ,catSound);

// VARIABLES LOGICAL OPERATOR

var score = 8;
console.log("Mid-level skills:" ,score>0 && score<10);

var timeRemaining = 0;
var energy = 10;
console.log( "Game over: ",timeRemaining == 0 || energy == 0)


var num1 = 2;
var num2 = 5;
var test1 =  num1 % 2;
var test2 =  num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log( "Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);


var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d);


var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
