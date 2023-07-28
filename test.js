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

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();


// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }

//   fruits.forEach(appendIndex);


// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers);



// class Animal {

// }

// class Dog extends Animal {
//     constructor() {
//         this.noise = "bark";
//     }

//     makeNoise() {
//       return this.noise;
//     }
// }

// class Wolf extends Dog {
//     constructor() {
//         super();
//         this.noise = "growl";
//     }
// }

// var result = new Wolf();
// console.log(result.makeNoise());

   function count(...food) {
        console.log(food.length)
    }

    count("Burgers", "Fries", null);

    const letter = "a";
    letter = "b"
