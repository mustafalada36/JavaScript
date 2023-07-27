// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
for (const iter of dairy) {
       console.log(iter);
}

}
logDairy();
console.log(" ");

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for ( iter1 of Object.keys(bird)) {
        console.log(iter1 + ":" +bird[iter1]);
    }
}
birdCan();
console.log(" ");
// Task 3
function animalCan(){
    for ( iter2 in bird) {
        console.log(iter2 + ":" +bird[iter2]);

    }
}
animalCan();
